import "jsr:@supabase/functions-js/edge-runtime.d.ts";

declare const Deno: any;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, message }: ContactRequest = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Email configuration - update with your email service
    const YOUR_EMAIL = "amaranawel662@gmail.com"; // Change this to your email
    
    // For now, we'll log the message (in production, integrate with an email service like SendGrid, Resend, etc.)
    console.log("Contact form submission:", {
      from: email,
      to: YOUR_EMAIL,
      name: name,
      message: message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with an email service
    // Example with Resend:
    // const resendApiKey = Deno.env.get('RESEND_API_KEY');
    // const response = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${resendApiKey}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     from: 'noreply@yourdomain.com',
    //     to: YOUR_EMAIL,
    //     subject: `Portfolio Contact: ${name}`,
    //     html: `
    //       <h2>New Contact Form Submission</h2>
    //       <p><strong>From:</strong> ${name} (${email})</p>
    //       <p><strong>Message:</strong></p>
    //       <p>${message}</p>
    //     `,
    //   }),
    // });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message received! We'll get back to you soon.",
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process your message" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});