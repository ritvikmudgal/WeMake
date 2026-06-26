import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const data = req.body;

    await resend.emails.send({
      from: "WeMake <onboarding@resend.dev>",
      to: "WeMake.webb@gmail.com", // <-- Change this
      subject: `🚀 New Website Consultation from ${data.clientName}`,

      html: `
      <h2>New Consultation Request</h2>

      <hr/>

      <p><strong>Name:</strong> ${data.clientName}</p>
      <p><strong>Business:</strong> ${data.businessName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Location:</strong> ${data.location}</p>

      <hr/>

      <p><strong>Service:</strong> ${data.serviceRequired}</p>
      <p><strong>Website Type:</strong> ${data.websiteType}</p>
      <p><strong>Budget:</strong> ${data.budget}</p>
      <p><strong>Timeline:</strong> ${data.timeline}</p>

      <hr/>

      <p><strong>Existing Website:</strong> ${data.hasExistingWebsite}</p>
      <p><strong>Website URL:</strong> ${data.existingWebsiteUrl}</p>

      <hr/>

      <p><strong>Preferred Features:</strong></p>

      <ul>
        ${
          data.preferredFeatures
            ?.map((feature: string) => `<li>${feature}</li>`)
            .join("") || ""
        }
      </ul>

      <hr/>

      <p><strong>Project Description</strong></p>

      <p>${data.projectDescription}</p>

      <hr/>

      <p><strong>Additional Notes</strong></p>

      <p>${data.additionalNotes}</p>
      `,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
    });
  }
}