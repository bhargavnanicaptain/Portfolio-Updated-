import React from 'react';

const Resume = () => {
    // Function to handle download
    const handleDownload = () => {
        const resumePDFPath = process.env.PUBLIC_URL + "/RESUME.pdf"; // ✅ removed /assets/
        const element = document.createElement("a");
        element.href = resumePDFPath;
        element.download = "VTBHARGAV_RESUME.pdf"; // optional: gives a nicer filename
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    

    return (
        <>
            <style>{`
                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 20px;
                    text-align: center;
                }

                .container {
                    max-width: 900px;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                h1 {
                    font-size: 28px;
                    color: #333;
                    margin-bottom: 10px;
                }

                h2 {
                    font-size: 22px;
                    color: #007bff;
                    margin-bottom: 10px;
                    text-align: left;
                }

                p, ul {
                    font-size: 16px;
                    color: #555;
                    text-align: left;
                }

                .disc {
                    text-align: center;
                    margin-bottom: 10px;
                }

                .disc a {
                    color: #007bff;
                    text-decoration: none;
                    font-weight: bold;
                }

                .disc a:hover {
                    text-decoration: underline;
                }

                .section {
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 15px;
                    margin-bottom: 15px;
                }

                ul {
                    padding-left: 20px;
                }

                li {
                    margin-bottom: 8px;
                }

                .download-button button {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    font-size: 16px;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                    display: block;
                    margin: 20px auto;
                }

                .download-button button:hover {
                    background-color: #0056b3;
                }

                @media (max-width: 768px) {
                    .container {
                        padding: 20px;
                    }

                    h1 {
                        font-size: 24px;
                    }

                    h2 {
                        font-size: 20px;
                    }

                    p, li {
                        font-size: 14px;
                    }

                    .download-button button {
                        padding: 8px 16px;
                        font-size: 14px;
                    }
                }

                @media print {
                    .download-button {
                        display: none;
                    }

                    .container {
                        box-shadow: none;
                        border-radius: 0;
                    }
                }
            `}</style>

            <div className="container">
                <h1>THIRUMALA BHARGAV VALLAMKONDA</h1>
                <p className='disc'>15-7-483/3, Royary Nagar, Khammam, Telangana, 507002</p>
                <p className='disc'><a href="mailto:vallamkondabhargav@gmail.com">vallamkondabhargav@gmail.com</a> | (+91) 8074588232</p>
                <p className='disc'>
                    <a href="http://linkedin.com/in/vtbhargav">LinkedIn</a> | 
                    <a href="https://github.com/bhargavnanicaptain" style={{ marginLeft: '10px' }}>GitHub</a> | 
                    <span style={{ marginLeft: '10px' }}>Portfolio</span>
                </p>

                <div className="section">
                    <h2>Education</h2>
                    <p><strong>Siddhartha Institute of Engineering and Technology</strong>, Hyderabad, Telangana</p>
                    <p>Bachelor of Technology in Electronics Communications Engineering (2019 - 2023)</p>
                    <p>CGPA: 7.70</p>
                </div>

                <div className="section">
                    <h2>Experience</h2>
                    <p><strong>Sonata Software | Robotic Processing Automation</strong> - Bengaluru, India | July 2024 - Present</p>
                    <p>Skilled in Blue Prism, VBA, VB .NET, and Selenium, with expertise in RPA workflows, Excel/web automation, and custom scripting. Proficient in scalable automation solutions, error handling, and debugging.</p>
                </div>

                <div className="section">
                    <h2>Skills</h2>
                    <p><strong>Programming Languages:</strong> Java, Python, HTML, CSS</p>
                    <p><strong>Libraries/Frameworks:</strong> JavaScript, React, Bootstrap, Spring Boot</p>
                    <p><strong>Tools / Platforms:</strong> Git, VS Code, Eclipse, IntelliJ IDEA</p>
                    <p><strong>Databases:</strong> MySQL, MSSQL</p>
                </div>

                <div className="section">
                    <h2>Projects / Open-Source</h2>
                    <p><strong>Wellpath</strong> - Blue Prism, Stackify, DBA, NOC</p>
                    <ul>
                        <li><strong>Blue Prism:</strong> Automates rule-based tasks and enables secure, scalable workflows using a visual interface.</li>
                        <li><strong>Stackify:</strong> Monitors application performance and provides insights for debugging and optimization.</li>
                        <li><strong>DBA:</strong> Ensures database security, performance tuning, and efficient data management.</li>
                        <li><strong>NOC:</strong> Monitors and manages network infrastructure for continuous availability and security.</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Certifications</h2>
                    <ul>
                        <li><a href="https://freecodecamp.org/certification/fccda73044b-f7ea-45e9-ad84-c27de4fd4dfe/responsive-web-design" target="_blank" rel="noopener noreferrer">Responsive Web Design - Free Code Camp</a></li>
                        <li><a href="https://www.hackerrank.com/certificates/a7f22e0723b0" target="_blank" rel="noopener noreferrer">CSS Basics - HackerRank</a></li>
                        <li><a href="https://simpli-web.app.link/e/sjcBA6xf3Jb" target="_blank" rel="noopener noreferrer">JavaScript for Beginners - Simplilearn Skillup</a></li>
                        <li><a href="https://www.hackerrank.com/certificates/33d59ca3dbea" target="_blank" rel="noopener noreferrer">SQL Basic - HackerRank</a></li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Honors & Awards</h2>
                    <p>🏆 Won a college-level Hackathon for developing an Obstacle Avoiding Robot.</p>
                </div>

                <div className="download-button">
                    <button onClick={handleDownload}>Download Resume</button>
                </div>
            </div>
        </>
    );
};

export default Resume;
