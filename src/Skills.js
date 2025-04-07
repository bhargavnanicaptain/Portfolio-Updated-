import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: 'Programming Languages',
        skills: [
            { name: 'Java', img: 'https://static-00.iconduck.com/assets.00/java-icon-512x512-kvr1nudq.png' },
            { name: 'c-sharp', img: 'https://i.pinimg.com/736x/52/85/4b/52854be7602f3b1db549ea52ae1d3d94.jpg' }
        ]
    },
    {
        category: 'Web Technologies',
        skills: [
            { name: 'HTML5', img: 'https://www.freeiconspng.com/thumbs/html5-icon/html5-icon-6.png' },
            { name: 'CSS3', img: 'https://logowik.com/content/uploads/images/123_css3.jpg' },
            { name: 'JavaScript', img: 'https://thumbs.dreamstime.com/b/javascript-logo-javascript-logo-white-background-vector-format-available-136765881.jpg' }
        ]
    },
    {
        category: 'Frameworks',
        skills: [
            { name: 'Spring Boot', img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/spring-boot-1_5zDxm9B.jpg' },
            { name: 'Hibernate', img: 'https://miro.medium.com/v2/resize:fit:400/0*jba3dz1j64rfhl5i.jpg' },
            { name: 'Bootstrap', img: 'https://epss.ucla.edu/static/bootstrap-5.2.0/site/static/docs/5.2/assets/brand/bootstrap-social-logo.png' }
        ]
    },
    {
        category: 'Libraries',
        skills: [
            { name: 'React', img: 'https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png' }
        ]
    },
    {
        category: 'Databases',
        skills: [
            { name: 'MySQL', img: 'https://cdn3d.iconscout.com/3d/free/thumb/free-mysql-9294870-7578013.png' },
            { name: 'MSSQL', img: 'https://www.nationalcomputer.com/wp-content/uploads/elementor/thumbs/p4-onwc1jggns04s30gcrizj503uazmf8khmni9gb4ray.jpg' }
        ]
    },
    {
        category: "Tools & IDE's",
        skills: [
            { name: 'Git', img: 'https://as2.ftcdn.net/v2/jpg/02/50/30/59/1000_F_250305943_sDC6la1N1fDl3bLgfLxOkQwItIodsdMb.jpg' },
            { name: 'VS Code', img: 'https://repository-images.githubusercontent.com/657248114/d3c7b91a-b285-4d1e-8429-5de1acc5f61e' },
            { name: 'IntelliJ IDEA', img: 'https://seeklogo.com/images/J/jetbrains-intellij-idea-logo-CA1D5DC51F-seeklogo.com.png' },
            { name: 'Eclipse', img: 'https://logowik.com/content/uploads/images/eclipse5466.jpg' }
        ]
    },
    {
        category: 'Operating Systems',
        skills: [
            { name: 'Windows', img: 'https://i.pinimg.com/736x/d3/02/d7/d302d7664552bb4bdad844c335c3ad25.jpg' },
            { name: 'Linux', img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/linux-logo-design-template-b04c5960543f942cbd64c81280a5a941_screen.jpg?ts=1659251350' }
        ]
    }
];

const Skills = () => {
    return (
        <motion.div 
            className="skills-container" 
            style={{ textAlign: 'center', backgroundColor: '#14213d', padding: '20px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <h1 style={{ color: '#fca311', fontFamily: 'Times New Roman', fontStyle: 'italic' }}>My Skills</h1>
            
            {skillsData.map((category, index) => (
                <motion.div key={index} style={{ marginBottom: '30px' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                    <h2 style={{ color: '#fca311', fontFamily: 'Times New Roman', fontStyle: 'italic' }}>{category.category}</h2>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
                        {category.skills.map((skill, skillIndex) => (
                            <motion.div 
                                key={skillIndex} 
                                className="card" 
                                style={{ 
                                    width: '10rem', 
                                    backgroundColor: '#fff', 
                                    borderRadius: '10px', 
                                    padding: '10px', 
                                    textAlign: 'center',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                            >
                                <motion.img 
                                    src={skill.img} 
                                    className="card-img-top" 
                                    alt={skill.name} 
                                    style={{ 
                                        width: '100%', 
                                        height: '80px', 
                                        objectFit: 'contain', 
                                        borderRadius: '10px',
                                        transition: 'transform 0.3s ease-in-out' 
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                />
                                <div className="card-body">
                                    <p className="card-text" style={{ fontWeight: 'bold' }}>{skill.name}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Skills;
