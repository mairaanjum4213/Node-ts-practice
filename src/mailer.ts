import nodemailer from 'nodemailer';


//creating transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  secure: true,
  tls: {
    rejectUnauthorized: false
  }
});

export const sendTestMail = async (recipient_emails: string[], category: string, subCategory: string,data: any[]) => {
  //mail data

 

  let htmlString = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>End-of-day Report Email</title>
    <style>
      @media only screen and (max-width: 600px) {
      
        .headerBlock{
          display: block !important;
          text-align: left;
          margin-top: 10px;
          float: left !important;
        }

      

        .headerBlockPadding{
          padding:20px !important;
        }

        .boxPadding{
            padding-right:20px !important;
            padding-left:20px !important;
            padding-top:30px !important;
            padding-bottom:30px !important;
        
        }
        
        .boxPadding2{
            padding-right:20px !important;
            padding-left:20px !important;
            padding-top:30px !important;
        }

         .boxPadding3{
            padding-right:50px !important;
            padding-left:20px !important;
            padding-top:30px !important;
            padding-bottom:30px !important;
        
        }
        
        .boxPadding4{
            padding-right:50px !important;
            padding-left:20px !important;
            padding-top:30px !important;
        }


        .buttonPadding{
            padding: 3px 18px !important;
        }

        .bodyPadding{
            padding: 0 30px !important;
        }


        .bodyPadding2{
            padding: 15px 30px !important;
        }

        .headingPadding{
          padding-left:30px !important;
          padding-right:30px !important;
          padding-top:0 !important;
          padding-bottom: 0 !important;
        }

        .headingPadding2{
          padding-left:30px !important;
          padding-right:30px !important;
          padding-top:10px !important;
          padding-bottom: 0 !important;
        }

        .footerPadding{
            padding-top : 30px !important;
        }

        .footerMargin{
          margin-top: 20px !important;
          
        }
      
        .footerLayout {
          display: block !important;
          
       }
       
      
       .buttonPadding{
            padding: 1px 15px !important;
        }
            
        table {
      width: 100% !important; /* Make table full-width on small screens */
  }
      
      }

      @media only screen and (max-width: 350px) {
        .buttonPadding{
            padding: 2px 10px !important;
        }
      }
    </style>
  </head>
  <body
    style="font-family: Arial, sans-serif; margin: 0; padding: 0"
  >
    <table
     width="100%" cellspacing="0" cellpadding="0" style="margin: 0 auto; padding: 20px 0;" align="center"
    >
      <tr>
        <td align="center">
          <table
           
            cellspacing="0"
            cellpadding="0"
            style="max-width: 650px; background-color: #ffffff; padding: 0; margin: 0 auto; border-collapse: collapse;"
            align="center"
            
          >
  
            <!-- Body -->
            <tr>
               <td style="padding-top:10px; padding-bottom:40px; padding-left:60px; padding-right:60px; font-size: 12px; line-height: 1.6" class="headerPadding headerBlockPadding">
                <p style="margin: 0; color: #515151">
                  <span style="float: left"
                    >"Carol Hart" was mentioned in the Wellington Building -
                    315.</span
                  >
                  <span style="float:right;" class="headerBlock">
                    <a
                      href="#"
                      style="color: #515151; text-decoration: underline"
                      >View in browser</a
                    >
                  </span>
                </p>
              </td>
            </tr>

            <tr>
             <td style="padding:0 20px;">
              <table width="650px" cellspacing="0" cellpadding="0" style="background-color: #ececec;">
                <tr>
                  <td style="padding-left:40px; padding-right:40px; padding-top:40px; padding-bottom:30px; line-height: 1.6" class="boxPadding">
                    <p style="margin: 0;">
                      <span>
                        <img src="https://i.imgur.com/Ux7Kdku.jpg" width="40%" />
                      </span>
                      <span
                        style="float: right; background-color: #2468cd; padding:6px 30px; border-radius: 20px;" 
                        class="buttonPadding"
                      >
                        <a
                          href="#"
                          style="color:#ffffff; text-decoration: none; font-size:14px; font-weight:bold;"
                        >Edit Alerts</a>
                      </span>
                    </p>
                  </td> 
                </tr>

                <tr>
                  <td
                    style="
                      padding-left:40px;
                      padding-right:40px;
                      padding-bottom:30px;
                      font-size: 20px;
                      font-weight: bold;
                      color: #0c0c0c;
                    "
                    class="boxPadding"
                  >
                    <div style="padding-left: 10px; border-left: 4px solid #2468cd;">
                      <p style="font-size: 12px; margin: 0; padding: 0; color:#515151;">${category}</p>
                      <p style="margin: 5px 0 0 0; padding: 0;">${subCategory}</p>
                    </div>
                  </td>
                </tr>

              </table>
            </td>
            </tr>`


            data.forEach((item, index) => {
              let keywordTitle = item.keywordTitle;
            
              htmlString += `<tr>
                <td
                  style="
                   
                    padding-left: 60px;
                    padding-right: 60px;
                    line-height: 1.6;
                    font-size: 13px;
                    color: #515151;
                    display: block;
                    width: 90%;
                  "
                  class="headingPadding"
                >
                  <p style="color: #0c0c0c; font-size: 20px; font-weight: bold">
                    <span
                      style="
                        display: inline-block;
                        background-color: #2468cd;
                        border-radius: 50%;
                        height: 8px;
                        width: 8px;
                        margin-right: 10px;
                        vertical-align: middle;
                      "
                    ></span>
                    ${keywordTitle} <!-- Dynamically rendering keyword -->
                  </p>
                </td>
              </tr>`;
            
              item.content.forEach((contentItem:any) => {
                let date = contentItem.date;
                let htmlContent = contentItem.htmlContent;
                let transcriptURL = contentItem.transcriptURL;
            
                htmlString += `
                  <tr>
                    <td
                      style="
                        padding-top: 15px;
                        padding-bottom :10px;
                        padding-left:60px;
               padding-right:60px;
                        line-height: 1.6;
                        font-size: 13px;
                        color: #515151;
                        display: block;
                        
                      "
                      class="bodyPadding2"
                    >
                      <span style="color: #0c0c0c; font-weight: bold">${date}</span><br />
                      ${htmlContent}
                      <br />
                      <a href="${transcriptURL}" style='color: #2468cd; text-decoration: underline'>View full transcript</a>
                    </td>
                  </tr>`;
              });
            
              // Add an <hr> if it's not the last item
              if (index < data.length - 1) {
                htmlString += `
                  <tr>
                    <td
                      style="
                        padding-top:  15px;
                        padding-left: 60px;
                        padding-right: 60px;
                      "
                     class="headingPadding2"
                    >
                      <hr style="color: #515151" />
                    </td>
                  </tr>`;
              }
            });
            
            

  htmlString += `
            <!-- Footer -->
          <tr>
            <td style="padding-left:20px; padding-right:20px; padding-top:20px;" > 
              <table width="100%" cellspacing="0" cellpadding="0">
                <tr style="background-color: #515151;">
                  <!-- Logo Cell -->
                  <td
                    style="padding-left:40px; padding-right:80px; padding-top:40px; padding-bottom:40px;" 
                    class="boxPadding4 footerLayout"
                  >
                    <span>
                    <img src="https://i.imgur.com/p1jY32C.png" width="60%" />
                    <br>
                    <br>
                    <a style="color:#ffffff; text-decoration: underline;">Change your alert settings</a>
                    </span>
                  </td>

                  <!-- Address Cell -->
                  <td
                    style="padding-left:80px; padding-right:20px; padding-top:40px; padding-bottom:40px; line-height: 1.6;"
                    class="boxPadding3 footerLayout"
                  >
                  
                      <span style="color:#ffffff; font-size: 12px; user-select: none; text-decoration: none;" >
                        1 University Avenue
                        <br>
                        Toronto, Ontario, Canada
                        <br>
                        M5J 2P1
                      </span>  
                  
                  </td>
                </tr>
              </table>
            </td>
        </tr>

      
            <!--Copyright-->
            <tr>
              <td style="color: #515151; padding: 20px 60px; font-size: 12px" class="headerBlockPadding">
                &copy; 2024 PoliAlerts. All rights reserved.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipient_emails,
    subject: 'End-of-day Report Email',
    html: htmlString,

  };

  await transporter.sendMail(mailOptions);
};
