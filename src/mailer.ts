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

export const sendTestMail = async (email: string) => {
    //mail data
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'End-of-day Report Email',
    html:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <title>End-of-day Report Email</title>
    <style>
      @media only screen and (max-width: 600px) {
        
        td{
            padding:10px 
            !important;         
        }

        .header{
            display: none !important;
        }

        .headerBlock{
            margin-top: 10px;
            float: left !important;

        }

        .headerBlock2{
            margin-top: 0 !important;
            float: left !important;

        }

        .boxPadding{
            padding: 40px 20px !important;
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

        .footerPadding{
            padding-top : 30px !important;
        }

        .footerMargin{
          margin-top: 20px !important;
        }
      
      }

      @media only screen and (max-width: 350px) {
        .buttonPadding{
            padding: 2px 15px !important;
        }
      }
    </style>
  </head>
  <body
    style="font-family: 'Poppins', Arial, sans-serif; margin: 0; padding: 0"
  >
    <table
      width="100%"
      cellspacing="0"
      cellpadding="0"
      style="padding: 0; margin: 0; width: 100%"
    >
      <tr>
        <td style="padding: 0">
          <table
            class="content"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            style="border-collapse: collapse; width: 100%;
            "
          >
            <!-- Header -->
            <tr class="header">
              <td style="padding: 0">
                <table width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td
                      style="
                        background-color: #6a6a6a;
                        color: #ffffff;
                        padding: 20px;
                        font-size: 14px;
                        text-align: left;
                      "
                    >
                      <strong style="margin-right: 16px">SENDER NAME: </strong>
                      PoliAlerts
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <hr
                        style="
                          border: 0;
                          border-top: 1px solid #ffffff;
                          margin: 0;
                          width: 100%;
                        "
                      />
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        background-color: #6a6a6a;
                        color: #ffffff;
                        padding: 20px;
                        font-size: 14px;
                        text-align: left;
                      "
                    >
                      <strong style="margin-right: 16px">SUBJECT LINE: </strong>
                      Canadian Senate Aug. 3 Report  | Keyword, keyword, keyword, keyw...
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding: 40px 60px; font-size: 12px; line-height: 1.6" class="headerPadding">
                <p style="margin: 0; color: #515151">
                  <span style="float: left"
                    >Your Canadian Senate keyword mentions for Aug 3, 2024
                    </span
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
                <table width="100%" cellspacing="0" cellpadding="0">
                  <tr style="background-color: #ececec">
                    <td
                      style="padding:40px 40px; line-height: 1.6" class="boxPadding"
                    >
                      <p style="margin: 0;">
                        <span 
                          >
                        <img src="https://i.imgur.com/qfLZVZ7.png" width="20%"/></span
                        >
                        <span style="float: right; background-color: #2468cd; padding:6px 30px; border-radius: 20px;" class="buttonPadding">
                          <a
                            href="#"
                            style="color:#ffffff; text-decoration: none; font-size:14px;"
                            >Edit Alerts</a
                          >
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr style="background-color:#ececec;">
                    <td
                      style="
                        padding: 30px 40px;
                        font-size: 20px;
                        font-weight: bold;
                        color: #0c0c0c;
                      "
                      class="boxPadding"
                    >
                      <div style="padding-left: 10px; border-left: 4px solid #2468cd;">
                        <p style="font-size: 12px; margin: 0; padding: 0; color:#515151;">FEDERAL</p>
                        <p style="margin: 5px 0 0 0; padding: 0;">Canadian Senate</p>
                      </div>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>

            <!--First row-->
            <tr>
              <td
                style="
                  padding: 30px 60px;
                  line-height: 1.6;
                  font-size: 13px;
                  color:#515151;
                "

                class="bodyPadding2"
              >
              <p style="color:#0c0c0c; font-size: 20px; font-weight: bold;">
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
               Doug Ford
              </p>
              
                <span style="color: #0c0c0c; font-weight: bold;">09:52 EST</span><br>
                ...lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tellus eget metus eleifend ornare. Curabitur eu lobortis nibh. Vestibulum ullamcorper <strong style="color:#2468cd; letter-spacing:2px;">DOUG FORD </strong> laoreet. Suspendisse nec efficitur metus, vel auctor ante. Vestibulum vel elementum diam. Etiam enim dolor, mattis ac sagittis...
                <br>
                <a href="#" style="color: #2468cd; text-decoration: underline;"
                >View full transcript</a
              >
              </td>
            </tr>

            <tr>
                <td
                  style="
                    padding: 0 60px;
                    line-height: 1.6;
                    font-size: 13px;
                    color:#515151;
                  "
                  class="bodyPadding2"
                >
                
                  <span style="color: #0c0c0c; font-weight: bold;">11:03 EST</span><br>
                  ...lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tellus eget metus eleifend ornare. Curabitur eu lobortis nibh. Vestibulum ullamcorper <strong style="color:#2468cd; letter-spacing:2px;">DOUG FORD </strong> laoreet. Suspendisse nec efficitur metus, vel auctor ante. Vestibulum vel elementum diam. Etiam enim dolor, mattis ac sagittis...
                  <br>
                  <a href="#" style="color: #2468cd; text-decoration: underline;"
                  >View full transcript</a
                >
                </td>
            </tr>

            <tr>
                <td
                  style="
                    padding: 30px 60px;
                    line-height: 1.6;
                    font-size: 13px;
                    color:#515151;
                  "
                  class="bodyPadding2"
                >
                
                  <span style="color: #0c0c0c; font-weight: bold;">15:13 EST</span><br>
                  ...lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tellus eget metus eleifend ornare. Curabitur eu lobortis nibh. Vestibulum ullamcorper <strong style="color:#2468cd; letter-spacing:2px;">DOUG FORD </strong> laoreet. Suspendisse nec efficitur metus, vel auctor ante. Vestibulum vel elementum diam. Etiam enim dolor, mattis ac sagittis...
                  <br>
                  <a href="#" style="color: #2468cd; text-decoration: underline;"
                  >View full transcript</a
                >
                </td>
            </tr>

            <tr>
           
                <td
                  style="
                    padding: 0 60px;
                    line-height: 1.6;
                    font-size: 13px;
                    color:#515151;
                  "
                  class="bodyPadding2"
                >
                
                  <span style="color: #0c0c0c; font-weight: bold;">17:47 EST</span><br>
                  ...lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tellus eget metus eleifend ornare. Curabitur eu lobortis nibh. Vestibulum ullamcorper <strong style="color:#2468cd; letter-spacing:2px;">DOUG FORD </strong> laoreet. Suspendisse nec efficitur metus, vel auctor ante. Vestibulum vel elementum diam. Etiam enim dolor, mattis ac sagittis...
                  <br>
                  <a href="#" style="color: #2468cd; text-decoration: underline;"
                  >View full transcript</a
                >
                </td>
            </tr>

            <tr>
                <td style="padding-top:30px; padding-left: 60px; padding-right: 60px;">
                    <hr style="color:#515151"/>
                </td>
            </tr>


            <!--2nd row-->
            <tr>
                <td
                  style="
                    padding: 0 60px;
                    line-height: 1.6;
                    font-size: 13px;
                    color:#515151;
                  "
  
                  class="bodyPadding2"
                >
                <p style="color:#0c0c0c; font-size: 20px; font-weight: bold;">
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
                 TTC
                </p>
                
                  <span style="color: #0c0c0c; font-weight: bold;">10:19 EST</span><br>
                  ...lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tellus eget metus eleifend ornare. Curabitur eu lobortis nibh. Vestibulum ullamcorper <strong style="color:#2468cd; letter-spacing:2px;">TTC </strong> laoreet. Suspendisse nec efficitur metus, vel auctor ante. Vestibulum vel elementum diam. Etiam enim dolor, mattis ac sagittis...
                  <br>
                  <a href="#" style="color: #2468cd; text-decoration: underline;"
                  >View full transcript</a
                >
                </td>
              </tr>
  
            <tr>
                  <td
                    style="
                      padding: 30px 60px;
                      line-height: 1.6;
                      font-size: 13px;
                      color:#515151;
                    "
                    class="bodyPadding2"
                  >
                  
                    <span style="color: #0c0c0c; font-weight: bold;">14:00 EST</span><br>
                    ...lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tellus eget metus eleifend ornare. Curabitur eu lobortis nibh. Vestibulum ullamcorper <strong style="color:#2468cd; letter-spacing:2px;">TTC </strong> laoreet. Suspendisse nec efficitur metus, vel auctor ante. Vestibulum vel elementum diam. Etiam enim dolor, mattis ac sagittis...
                    <br>
                    <a href="#" style="color: #2468cd; text-decoration: underline;"
                    >View full transcript</a
                  >
                  </td>
            </tr>
  
            <tr>
                  <td
                    style="
                      padding: 0 60px;
                      line-height: 1.6;
                      font-size: 13px;
                      color:#515151;
                    "
                    class="bodyPadding2"
                  >
                  
                    <span style="color: #0c0c0c; font-weight: bold;">16:25 EST</span><br>
                    ...lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tellus eget metus eleifend ornare. Curabitur eu lobortis nibh. Vestibulum ullamcorper <strong style="color:#2468cd; letter-spacing:2px;">TTC </strong> laoreet. Suspendisse nec efficitur metus, vel auctor ante. Vestibulum vel elementum diam. Etiam enim dolor, mattis ac sagittis...
                    <br>
                    <a href="#" style="color: #2468cd; text-decoration: underline;"
                    >View full transcript</a
                  >
                  </td>
            </tr>
  
            <tr>
                  <td style="padding-top:30px; padding-left: 60px; padding-right: 60px;" >
                      <hr style="color:#515151"/>
                  </td>
            </tr>

            <!--3rd row-->
            <tr>
                <td
                  style="
                    padding: 0 60px;
                    line-height: 1.6;
                    font-size: 13px;
                    color:#515151;
                  "
  
                  class="bodyPadding2"
                >
                <p style="color:#0c0c0c; font-size: 20px; font-weight: bold;">
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
                 Coca Cola
                </p>
                
                  <span style="color: #0c0c0c; font-weight: bold;">14:00 EST</span><br>
                  ...lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tellus eget metus eleifend ornare. Curabitur eu lobortis nibh. Vestibulum ullamcorper <strong style="color:#2468cd; letter-spacing:2px;">COCA COLA </strong> laoreet. Suspendisse nec efficitur metus, vel auctor ante. Vestibulum vel elementum diam. Etiam enim dolor, mattis ac sagittis...
                  <br>
                  <a href="#" style="color: #2468cd; text-decoration: underline;"
                  >View full transcript</a
                >
                </td>
            </tr>
  
            <tr>
                  <td
                    style="
                      padding: 30px 60px;
                      line-height: 1.6;
                      font-size: 13px;
                      color:#515151;
                    "
                    class="bodyPadding2"
                  >
                  
                    <span style="color: #0c0c0c; font-weight: bold;">16:25 EST</span><br>
                    ...lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tellus eget metus eleifend ornare. Curabitur eu lobortis nibh. Vestibulum ullamcorper <strong style="color:#2468cd; letter-spacing:2px;">COCA COLA</strong> laoreet. Suspendisse nec efficitur metus, vel auctor ante. Vestibulum vel elementum diam. Etiam enim dolor, mattis ac sagittis...
                    <br>
                    <a href="#" style="color: #2468cd; text-decoration: underline;"
                    >View full transcript</a
                  >
                  </td>
            </tr>
  
            <tr>
                  <td style="padding: 0 60px;">
                      <hr style="color:#515151"/>
                  </td>
            </tr>
            


            <!-- Footer -->
            <tr>
                <td style="padding: 0 20px; padding-top:50px;" class="footerPadding">
                  <table width="100%" cellspacing="0" cellpadding="0">
                    <tr style="background-color: #515151">
                      <td
                        style="padding:40px 40px; line-height: 1.6" class="boxPadding "
                      >
                    
                          <span 
                          
                            >
                            <img src="https://i.imgur.com/p1jY32C.png" width="20%" />
                           
                            <span style="display: block; margin-top: 20px; font-size: 12px;" class="footerMargin"><a style="color:#ffffff; text-decoration: underline; ">Change your alert settings</a></span>
                            <span style="float:right; color:#ffffff; font-size: 12px; margin-top:-80px;" class="headerBlock2 footerMargin">
                              1 University Avenue
                              <br>
                              Toronto, Ontario, Canada
                              <br>
                              M5J 2P1
                            </span>  
                                
                            </span
                          >
                      </td> 
                    </tr>
                  </table>
                </td>
            </tr>
            <!--Copyright-->
            <tr>
              <td
                style="
                  
                  color:#515151 ;        
                  padding:20px 60px;
                  font-size: 12px;
                "
              >
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

  };

  await transporter.sendMail(mailOptions);
};
