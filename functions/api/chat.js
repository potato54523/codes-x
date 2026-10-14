export async function onRequestPost(ctx) {
  const { request, env } = ctx;
  const corsHeaders = {
    "Access‑Control‑Allow‑Origin": "*",
    "Access‑Control‑Allow‑Methods": "POST,OPTIONS",
    "Access‑Control‑Allow‑Headers": "Content‑Type"
  };

  try {
    const { system, prompt } = await request.json();
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();
    const encoder = new TextEncoder();

    const aiRes = await env.AI.run("@cf/qwen/qwen1.5‑7b‑chat‑awq", {
      stream: true,
      messages: [
        { role:"system", content: system },
        { role:"user", content: prompt }
      ]
    });

    (async ()=>{
      for await (const chunk of aiRes) {
        if(chunk?.response){
          await writer.write(encoder.encode(chunk.response));
        }
      }
      await writer.close();
    })().catch(e=>writer.close());

    return new Response(stream.readable, {
      headers:{
        ...corsHeaders,
        "Content‑Type":"text/event‑stream; charset=utf‑8"
      }
    })
  } catch (e) {
    return Response.json({err:e.message},{status:500,headers:corsHeaders})
  }
}

// 处理预检OPTIONS
export async function onRequestOptions(){
  return new Response(null,{
    headers:{
      "Access‑Control‑Allow‑Origin":"*",
      "Access‑Control‑Allow‑Methods":"POST,OPTIONS",
      "Access‑Control‑Allow‑Headers":"Content‑Type"
    }
  })
}