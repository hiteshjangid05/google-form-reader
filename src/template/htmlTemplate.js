export default function generateHtmlFromTemplate(rowData) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>बोर्ड परीक्षा 2026 फॉर्म</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
            padding: 20px;
        }
        .a4-page {
            width: 100%;
            max-width: 210mm;
            min-height: 297mm;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 25mm;
            box-sizing: border-box;
        }
        .form-field {
            display: flex;
            align-items: center;
            padding: 0.5px -1px;
            width: 100%;
            margin-bottom: 0;
        }
        .form-label {
            flex-shrink: 0;
            width: auto;
            font-size: 0.65rem;
            color: #000;
            padding-right: 8px;
            white-space: nowrap;
            margin-bottom: 0;
            font-size: 0.70rem;
        }
        .form-input {
            flex-grow: 1;
            border: none;
            border-bottom: 1px solid #ccc;
            padding: 2px 0;
            font-size: 0.70rem;
            color: #000;
            outline: none;
            background-color: transparent;
            min-width: 0;
        }
        .signature-box {
            width: 75px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.75rem;
            color: #999;
            overflow: hidden;
        }
        .signature-img {
            max-width: 160%;
            max-height: 160%;
            object-fit: contain;
        }
        .two-col-container {
            display: flex;
            flex-wrap: wrap;
        }
        .two-col-item {
            flex: 1;
            min-width: 100px;
            padding-right: 16px;
        }
        .two-col-item:last-child {
            padding-right: 0;
        }
        @media (max-width: 768px) {
            .a4-page {
                padding: 10mm;
            }
            .form-label {
                width: auto;
                white-space: normal;
            }
            .two-col-item {
                flex: 1 1 100%;
                padding-right: 0;
            }
        }
    </style>
</head>
<body>
    <div class="a4-page flex flex-col">
        <!-- हेडर सेक्शन -->
        <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1.5rem; width: 100%;">
  <div style="width: 25%; font-weight: bold; font-size: 0.65rem; text-align: left;">परीक्षा/2026</div>
  <div style="width: 50%; text-align: center;">
    <div style="font-size: 1rem; font-weight: bold;">माध्यमिक शिक्षा बोर्ड, राजस्थान, अजमेर</div>
    <div style="font-size: .75rem; font-weight: bold;">
      आवेदन पत्र एवं परीक्षा शुल्क विवरण वर्ष - <span style="font-weight: bold;">2026</span>
    </div>
  </div>
  <div style="width: 25%; font-weight: bold; font-size: 0.65rem; text-align: right;">
    <span style="font-weight: 900;">परीक्षा प्रपत्र - 128</span>
  </div>
</div>
        <!-- मुख्य फॉर्म सेक्शन -->
        <div class="flex flex-col flex-grow">
            <!-- पहली पंक्ति (विद्यालय का नाम) -->
            <div class="two-col-container">
                <div class="two-col-item">
                    <div class="form-field">
                        <span class="form-label">विद्यालय का नाम -</span>
                        <p id="schoolName" type="text" class="form-input">${rowData["SCHOOL NAME\nविद्यालय का नाम "]}</p>
                    </div>
                </div>
                <div class="two-col-item">
                    <div class="form-field">
                        <span class="form-label">विद्यालय कोड -</span>
                        <p id="schoolCode" type="text" class="form-input">${rowData["SCHOOL CODE\n(BOARD LOGIN ID)\nविद्यालय कोड "]}</p>
                    </div>
                </div>
            </div>
            <!-- दूसरी पंक्ति (संस्थाप्रधान का नाम) -->
            <div class="two-col-container">
                <div class="two-col-item">
                    <div class="form-field">
                        <span class="form-label">संस्थाप्रधान का नाम -</span>
                        <p id="principalName" type="text" class="form-input">${rowData["PRINCIPAL NAME\nसंस्थाप्रधान का नाम "]}</p>
                    </div>
                </div>
                <div class="two-col-item">
                    <div class="form-field">
                        <span class="form-label">मोबाइल नं. -</span>
                        <p id="principalMobileNo" type="text" class="form-input">${rowData["PRINCIPAL MOBILE NUMBER\nसंस्थाप्रधान मोबाइल नंबर "]}</p>
                    </div>
                </div>
            </div>
            <!-- कक्षा 12 नियमित आवेदन -->
            <div class="flex flex-col">
                <div class="two-col-container mb-1">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">कक्षा 12 कुल (नियमित) आवेदन -</span>
                            <p id="class12RegTotalForm" type="text" class="form-input">${rowData["CLASS 12 (REGULAR)\nTOTAL FORMS\nकक्षा 12 (नियमित परीक्षार्थी)\nकुल आवेदन "]}</p>
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">कुल शुल्क -</span>
                            <p id="class12RegTotalFee" type="text" class="form-input">${rowData["CLASS 12 (REGULAR)\nTOTAL FEE \nकक्षा 12 (नियमित परीक्षार्थी)\nकुल शुल्क"]}</p>
                        </div>
                    </div>
                </div>
                <div class="two-col-container mb-1">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">ट्रांजेक्शन नं. 1 -</span>
                            <p id="class12RegTxnNo1" type="text" class="form-input">${rowData["CLASS 12 (REGULAR)\nTRANSACTION NO. 1"]}</p>
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">दिनांक -</span>
                            <p id="class12RegTxnNo1Date" type="text" class="form-input">${rowData["CLASS 12 (REGULAR)\nTRANSACTION NO. 1 DATE"]}</p>
                        </div>
                    </div>
                </div>
                <div class="two-col-container mb-1">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">ट्रांजेक्शन नं. 2 -</span>
                            <p id="class12RegTxnNo2" type="text" class="form-input">${rowData["CLASS 12 (REGULAR)\nTRANSACTION NO. 2"]}</p>
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">दिनांक -</span>
                            <p id="class12RegTxnNo2Date" type="text" class="form-input">${rowData["CLASS 12 (REGULAR)\nTRANSACTION NO. 2 DATE"]}</p>
                        </div>
                    </div>
                </div>
                <div class="two-col-container">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">ट्रांजेक्शन नं. 3 -</span>
                            <p id="class12RegTxnNo3" type="text" class="form-input">${rowData["CLASS 12 (REGULAR)\nTRANSACTION NO. 3"]}</p>
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">दिनांक -</span>
                            <p id="class12RegTxnNo3Date" type="text" class="form-input">${rowData["CLASS 12 (REGULAR)\nTRANSACTION NO. 3 DATE"]}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- कक्षा 12 स्वयंपाठी आवेदन -->
            <div class="flex flex-col">
                <div class="two-col-container mb-1">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">कक्षा 12 कुल (स्वयंपाठी) आवेदन -</span>
                            <p id="class12PriTotal" type="text" class="form-input">${rowData["CLASS 12 (PRIVATE)\nTOTAL FORMS\nकक्षा 12 (स्वयंपाठी परीक्षार्थी)\nकुल आवेदन"]}</p>
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">कुल शुल्क -</span>
                            <p id="class12PriTotalFee" type="text" class="form-input">${rowData["CLASS 12 (PRIVATE)\nTOTAL FEE \nकक्षा 12 (स्वयंपाठी परीक्षार्थी)\nकुल शुल्क"]}</p>
                        </div>
                    </div>
                </div>
                <div class="two-col-container">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">ट्रांजेक्शन नं. 1 -</span>
                            <p id="class12PriTxnNo1" type="text" class="form-input">${rowData["CLASS 12 (PRIVATE)\nTRANSACTION NO. 1"]}</p>
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">दिनांक -</span>
                            <p id="class12PriTxnNo1Date" type="text" class="form-input">${rowData["CLASS 12 (PRIVATE)\nTRANSACTION NO. 1 DATE"]}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- कक्षा 10 नियमित आवेदन -->
            <div class="flex flex-col">
                <div class="two-col-container mb-1">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">कक्षा 10 कुल (नियमित) आवेदन -</span>
                            <p id="class10RegTotalForms" type="text" class="form-input">${rowData["CLASS 10 (REGULAR)\nTOTAL FORMS\nकक्षा 10 (नियमित परीक्षार्थी)\nकुल आवेदन"]}</p>
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">कुल शुल्क -</span>
                            <p id="class10RegTotalFee" type="text" class="form-input">${rowData["CLASS 10 (REGULAR)\nTOTAL FEE \nकक्षा 10 (नियमित परीक्षार्थी)\nकुल शुल्क"]}</p>
                        </div>
                    </div>
                </div>
                <div class="two-col-container mb-1">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">ट्रांजेक्शन नं. 1 -</span>
                            <p id="class10RegTxnNo1" type="text" class="form-input">${rowData["CLASS 10 (REGULAR)\nTRANSACTION NO. 1"]}</p>
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">दिनांक -</span>
                            <p id="class10RegTxnNo1Date" type="text" class="form-input">${rowData["CLASS 10 (REGULAR)\nTRANSACTION NO. 1 DATE"]}</p>
                        </div>
                    </div>
                </div>
                <div class="two-col-container mb-1">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">ट्रांजेक्शन नं. 2 -</span>
                            <p id="class10RegTxnNo2" type="text" class="form-input">${rowData["CLASS 10 (REGULAR)\nTRANSACTION NO. 2"]}</p>
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">दिनांक -</span>
                            <p id="class10RegTxnNo2Date" type="text" class="form-input">${rowData["CLASS 10 (REGULAR)\nTRANSACTION NO. 2 DATE"]}</p>
                        </div>
                    </div>
                </div>
                <div class="two-col-container">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">ट्रांजेक्शन नं. 3 -</span>
                            <p id="class10RegTxnNo3" type="text" class="form-input">${rowData["CLASS 10 (REGULAR)\nTRANSACTION NO. 3"]}</p>
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">दिनांक -</span>
                            <p id="class10RegTxnNo3Date" type="text" class="form-input">${rowData["CLASS 10 (REGULAR)\nTRANSACTION NO. 3 DATE"]}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- कक्षा 10 स्वयंपाठी आवेदन -->
            <div class="flex flex-col">
                <div class="two-col-container mb-1">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">कक्षा 10 कुल (स्वयंपाठी) आवेदन -</span>
                            <p id="class10PriTotal" type="text" class="form-input">${rowData["CLASS 10 (REGULAR)\nTOTAL FORMS\nकक्षा 10 (नियमित परीक्षार्थी)\nकुल आवेदन"]}</p>
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">कुल शुल्क -</span>
                            <p id="class10PriTotalFee" type="text" class="form-input">${rowData["CLASS 10 (PRIVATE)\nTOTAL FEE\nकक्षा 10 (स्वयंपाठी परीक्षार्थी)\nकुल शुल्क"]}</p>
                        </div>
                    </div>
                </div>
                <div class="two-col-container">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">ट्रांजेक्शन नं. 1 -</span>
                            <p id="class10PriTxnNo1" type="text" class="form-input">${rowData["CLASS 10 (PRIVATE)\nTRANSACTION NO. 1"]}</p>
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">दिनांक -</span>
                            <p id="class10PriTxnNo1Date" type="text" class="form-input">${rowData["CLASS 10 (PRIVATE)\nTRANSACTION NO. 1 DATE"]}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- हस्ताक्षर सेक्शन 1 -->
            <div class="flex justify-end mb-8">
                <div style="display: flex; justify-content: flex-end; width: 100%; margin-bottom: 2rem;">
  <div style="display: flex; flex-direction: column; align-items: center; margin-right: 4rem;">
    <div class="signature-box mb-1">
      <img src="./signature.jpg" alt="हस्ताक्षर प्लेसहोल्डर" class="signature-img">
    </div>
    <div style="font-size: 0.75rem; font-weight: 300;"><b>हस्ताक्षर प्रभारी</b></div>
    <div style="font-size: 0.75rem; font-weight: 300;"><b>बोर्ड नोडल केंद्र (04/20)</b></div>
  </div>
</div>
                
            </div>
            <!-- उपस्थिति प्रमाण पत्र सेक्शन -->
            <div style="width: 100%; text-align: center; padding-top: -1rem; margin-bottom: 1rem;">
    <div style="font-size: 1rem; font-weight: bold;">कार्यालय बोर्ड नोडल केंद्र पीएमश्री महात्मा गांधी राजकीय विद्यालय स्टेशन रोड बाड़मेर</div>
    <div style="font-size: 1rem; font-weight: bold; margin-top: 0.5rem;">
      उपस्थिति प्रमाण पत्र
    </div>
  </div>
            <!-- क्रमांक और दिनांक (first row) -->
            <!-- Replace your current code for these two fields with the following: -->
<div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: #000; margin-bottom: 2px;">
  <div>
    क्रमांक - <span id="rowNo">${rowData["Sr No"]}</span>
  </div>
  <div>
    दिनांक - <span id="attendanceDate">${rowData["ATTENDANCE DATE\nउपस्तिथि दिनांक"]}</span>
  </div>
</div><br>
<p style="font-size:0.75rem; color:#000; margin-bottom:2px;">
  
  &nbsp&nbsp&nbsp&nbspप्रमाणित किया जाता है कि श्री/श्रीमती - <span id="employeeName">${rowData["EMPLOYEE NAME\nकर्मचारी का नाम"]}</span>,
  पद - <span id="designation">${rowData["DESIGNATION\nपद "]}</span>,
  पदस्थापन स्थान - <span id="postingPlace">${rowData["POSTING PLACE\nपदस्थापन स्थान"]}</span>,
  ने बोर्ड परीक्षा 2026 के आवेदन पत्र,
  जमा करवाने हेतु आज दिनांक - <span id="submitDate">${rowData["ATTENDANCE DATE\nउपस्तिथि दिनांक"]}</span>,
  को अपनी उपस्थिति इस कार्यालय में दी |
</p>
            <!-- हस्ताक्षर सेक्शन 2 -->
<div class="flex justify-end mb-8">
                <div style="display: flex; justify-content: flex-end; width: 100%; margin-bottom: 2rem;">
  <div style="display: flex; flex-direction: column; align-items: center; margin-right: 4rem;">
    <div class="signature-box mb-1">
      <img src="./signature.jpg" alt="हस्ताक्षर प्लेसहोल्डर" class="signature-img">
    </div>
    <div style="font-size: 0.75rem; font-weight: 300;"><b>हस्ताक्षर प्रभारी</b></div>
    <div style="font-size: 0.75rem; font-weight: 300;"><b>बोर्ड नोडल केंद्र (04/20)</b></div>
  </div>
</div>
        </div>
    </div>
    <script>
      const data = ${JSON.stringify(rowData)};
      Object.entries(data).forEach(([key, value]) => {
        let el = document.getElementById(key) || document.getElementById(toCamelCase(key));
        if (el) el.textContent = value;
      });
      function toCamelCase(str) {
        return str
          .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
          .replace(/[^a-zA-Z0-9]/g, '');
      }
    </script>
</body>
</html>
  `;
}