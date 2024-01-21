window.onload = () => {
// Fetch and inject HTML
const HTTP = "http://localhost:8000/chat";
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'open') {

        fetch(chrome.runtime.getURL('client/client.html'))
            .then(r => r.text())
            .then(html => {
                // Create a new div and insert the HTML
                let div = document.createElement('div');
                div.innerHTML = html;
                div.style.position = "fixed";
                div.style.top = "60%";
                div.style.left = "18%";
                div.style.zIndex = "1000";
                document.body.appendChild(div);
            });
        // Fetch and inject CSS
        fetch(chrome.runtime.getURL('client/client.css'))
            .then(r => r.text())
            .then(css => {
                // Create a new style element and insert the CSS
                let style = document.createElement('style');
                style.textContent = css;
                document.head.appendChild(style);
            });

        const el = document.createElement("input")
        el.setAttribute("type", "button");
        el.setAttribute("value", "⚙️");
        el.style.fontFamily = 'Open Sans, sans-serif';
        el.style.fontWeight = "bold";
        el.style.fontSize = "20px";
        el.style.position = "fixed";
        el.style.color = "white";
        el.style.backgroundColor = "#3c4043";
        el.style.border = "none";
        el.style.bottom = '20px';
        el.style.left = "31.8%";
        el.style.width = "40px";
        el.style.height = "40px";
        el.style.cursor = 'pointer';
        el.style.borderRadius = '20px';
        el.style.zIndex = "2000";
        document.body.appendChild(el)

        el.addEventListener("click", (event) => {
            console.log(event.target.checked);
            chrome.runtime.sendMessage({action: "openNewTab", url: "https://localhost:3000/"});
        })

        const grab = document.createElement("input")
        grab.setAttribute("type", "button");
        grab.setAttribute("value", "🧠");
        grab.style.fontFamily = 'Open Sans, sans-serif';
        grab.style.fontSize = "20px";
        grab.style.fontWeight="bold";
        grab.style.position = "fixed";
        grab.style.color = "white";
        grab.style.backgroundColor = "#3c4043";
        grab.style.border = "none";
        grab.style.bottom = '20px';
        grab.style.left = "28.3%";
        grab.style.width = "40px";
        grab.style.height = "40px";
        grab.style.cursor = 'pointer';
        grab.style.borderRadius = '20px';
        grab.style.zIndex = "2000";
        document.body.appendChild(grab)

        grab.addEventListener("click", (event) => {
            const element = document.querySelector(`[jsname="${"tgaKEf"}"]`);
            var send = element.textContent + `Limit your response to 3-4 sentences, answer the question as you would in an interview, assuming the perspective of the person with the following resume: This is my resume. Remember it and answer all future questions based on my experiences and strengths. 

            Benji Li
            +1 604 346 6080 |
            
            benji.jr.li@gmail.com |
            
            LinkedIn |  GitHub |
            
            Vancouver, Canada
            
            Education
            The University of British Columbia
            
            Vancouver, Canada
            
            B.A.Sc. Mechanical Engineering, Mechatronics Specialization
            Cumulative GPA: 4.00/4.00 (90.1%)
            Dean’s Scholar List: 2019, 2020, 2021, 2022
            
            Sep 2019 – Apr 2024
            
            Skills
            Technical Knowledge: DOE, GD&T, Tolerance Analysis, DFM/DFA, Injection Molding Design, Material Selection
            Mechanical: 3D Printing (FDM, SLA, SLS), Machining (Mill, Lathe, Hand Tools), Laser/Waterjet Cutting
            Electrical: Firmware (MSP430, 805x, ESP32), HV/LV Connectors, PCBA Manufacturing, SMD Soldering
            Software: CAD (CATIA V5, SolidWorks), Ansys Mechanical, Python, MATLAB, C, ROS, Git
            
            Publications
            Maram Sakr, Zhikai Zhang, Benjamin Li, Haomiao Zhang, HF Machiel Van der Loos, Dana Kulic, and
            Elizabeth Croft, “How Can Everyday Users Teach Robots Efficiently from Demonstrations?,” in Science
            Robotics, 2023
            •
            
            Manuscript currently under peer review.
            
            Research Experience
            CARIS Robotics Laboratory, UBC
            
            Vancouver, Canada
            
            Undergraduate Researcher
            May 2021 – May 2022
            • Worked on human-robot collaboration problems in the Collaborative Advanced Robotics and Intelligent Systems
            Lab under supervision of PhD candidate Maram Sakr, studying learning from demonstration (LfD), kinaesthetic
            teaching, and multi-modal robot control techniques.
            • Wrote Python scripts to utilize GMM neural network for pathfinding and motion planning, integrated with ROS
            and Gazebo frameworks to implement onto KUKA robotic arm.
            • Designed an information entropy algorithm to guide robotic learning process and quantify efficacy and efficiency of
            robotic teaching. Developed a user study and conducted experiment to evaluate algorithm.
            • Created a display and trajectory control interface in augmented reality headset to allow for more intuitive robotic
            teaching, compared this method to more conventional robotic control strategies through a user study.
            
            Work Experience
            Tesla
            
            Palo Alto, California
            
            Power Electronics Intern, Vehicle Charging
            Jan 2023 – Aug 2023
            • Designed and prototyped an insert molded connector header for HV and LV interfaces. Performed dimensional
            analysis, first principles calculations to evaluate functionality, FEA simulation to validate design.
            • Selected and evaluated an NTC to measure coil temperature, designed novel temperature sense architecture based
            on product specifications, conducted heat transfer analysis to determine efficacy of strategy, performed various
            DOE’s to validate the design.
            • Designed a thermal chamber and Instron coupling fixture to characterize inductance and power loss of ferrite cores
            over various stress and temperature states, collaborated with magnetics engineers to design test plan, data was used
            to inform core selection in power electronics products.
            
            Tesla
            
            Palo Alto, California
            
            Power Electronics Intern, Robotics
            May 2022 – Aug 2022
            • Designed a plastic injection molded component to enclose high voltage PCBA via snap-fits, optimized for DFM,
            evaluated and selected polycarbonate material based on CTI, strength, stiffness.
            • Prototyped a high-power (50V, 65A) charging interface for humanoid robot using solenoid actuators. Calculated
            magnetic force, contact resistance, and power consumption to select solenoid and electrical contacts.
            
            Matic Robots
            
            Mountain View, California
            
            Mechanical Design Intern
            Sept 2021 – Dec 2021
            • Designed reliability tester to evaluate lifetime of peristaltic pump, created Weibull reliability simulation in Excel to
            determine HALT test plan, used ESP32 microcontrollers and sensor array to run logic and send data over WiFi to
            track performance.
            • Optimized manufacturing process of part to eliminate production bottleneck, applied DFM/DFA principles to
            reduce complexity. Decreased production time by 60%.
            • Developed fixtures and jigs, including a CMOS sensor focusing rig, air leakage testers, flow rate monitors, and
            vacuum motor efficacy testers.
            
            Projects
            Mechanical Function Generator | UBC MECH
            Oct 2023 – Dec 2023
            • Designed a persistence of vision mechatronic gantry for visualizing standing waves formed by rope oscillation.
            Designed a custom rotary encoder module to enable motor feedback.
            • Implemented velocity and position closed loop controllers in MSP430 firmware, architected electrical schematic and
            soldered perf board with H-bridge drivers and logic shifters, built mechanical gantry with 80/20 extrusion, custom
            3D prints, and waterjet components.
            Cycloidal Actuator Design | UBC MECH
            Nov 2022 – Dec 2022
            • In team of six, designed and analyzed a novel cycloidal actuator for robotic applications.
            • Specified overall actuator performance in terms of torque-speed characteristic, fastener quantity and sizing, and
            reliability of bearing surfaces within the motor. Performed FEA simulations to validate specifications.
            When Air Takes Shape | ATTA Society
            Oct 2022 – Sept 2023
            • Contributed to mechatronic design of mobile art installation, including calibration of motor controllers and sensor
            selection/integration.
            • Conducted design analysis on sculpture chassis and motor bearing, specifying load capability and
            mounting/fastening strategy for stepper motor assembly.
            ArtBot | UBC Open Robotics
            Sept 2019 – Sept 2021
            • Manufactured and designed a delta robot with painting and drawing capabilities using stepper motors, machined
            aluminum, and carbon fiber arms. Modelled custom end-effector and structural assembly with CAD.
            • Performed kinematic simulations of robot range of motion, architected inverse kinematics control and image
            processing scripts using Python and computer vision libraries.`;
            console.log(send);
            if (element) {
                const clientBody = document.getElementById('bodyText');
                if (clientBody) {
                    const title = document.getElementById('title');
                    title.innerHTML = "🤔 Premove.ai";
                    //clientBody.innerHTML += "<br><strong>"+element.textContent+"</strong>";
                    //clientBody.scrollTop = clientBody.scrollHeight;

                    //console.log('hi');

                        // Send a POST request to the localhost address
                    fetch(HTTP, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            text: send
                        })
                    })
                    .then(
                        clientBody.innerHTML = "<strong>"+element.textContent+"</strong><br><br>"
                    )
                    .then(response => response.json())
                    .then(data => {
                        console.log("Request", data.text)
                        clientBody.innerHTML += data.text;
                        clientBody.scrollTop = clientBody.scrollHeight;
                        title.innerHTML = "🤓 Premove.ai";
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
                }

            }
        });
    }
    console.log('Injected HTML content into the active tab.');
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'getElementByjsname') {
        const element = document.querySelector(`[jsname="${request.jsName}"]`);
        var send = element.textContent + "Limit your response to 3-4 sentences, answer the question as you would in an interview, using examples of past experiences";
        console.log(send);
        if (element) {
            const clientBody = document.getElementById('bodyText');
            if (clientBody) {
                const title = document.getElementById('title');
                title.innerHTML = "🤔 Premove.ai";
                //clientBody.innerHTML += "<br><strong>"+element.textContent+"</strong>";
                //clientBody.scrollTop = clientBody.scrollHeight;

                //console.log('hi');

                // Send a POST request to the localhost address
                fetch(HTTP, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        text: send
                    })
                })
                .then(
                    clientBody.innerHTML = element.textContent+"<br><br>"
                )
                .then(response => response.json())
                .then(data => {
                    console.log("Request", data.text)
                    clientBody.innerHTML = element.textContent+"<br><br><strong>"+data.text+"</strong>";
                    clientBody.scrollTop = clientBody.scrollHeight;
                    title.innerHTML = "🤓 Premove.ai";
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            }

        }
        console.log(element.textContent);
    }
});
    
}