// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatbotBubble = document.getElementById('chatbot-bubble');
    const chatbotPanel = document.getElementById('chatbot-panel');
    const closeButton = document.getElementById('close-chatbot');
    const sendButton = document.getElementById('send-message');
    const userInput = document.getElementById('user-input');
    const messagesContainer = document.getElementById('chatbot-messages');
    
    // Toggle chatbot panel
    chatbotBubble.addEventListener('click', function() {
        console.log('Chatbot bubble clicked');
        chatbotPanel.classList.toggle('active');
    });
    
    // Close chatbot panel
    closeButton.addEventListener('click', function() {
        chatbotPanel.classList.remove('active');
    });
    
    // Send message function
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;
        
        // Add user message to chat
        addMessage(message, 'user');
        
        // Clear input field
        userInput.value = '';
        
        // Get bot response
        const botResponse = getBotResponse(message);
        
        // Simulate bot response (with typing indicator)
        setTimeout(() => {
            addMessage(botResponse, 'bot');
        }, 1000);
    }
    
    // Send message on button click
    sendButton.addEventListener('click', sendMessage);
    
    // Send message on Enter key
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Add message to chat
    function addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        
        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        
        const messageParagraph = document.createElement('p');
        messageParagraph.textContent = message;
        
        messageContent.appendChild(messageParagraph);
        messageDiv.appendChild(messageContent);
        messagesContainer.appendChild(messageDiv);
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    // Get bot response based on user input
    function getBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Greetings
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return "Hello! I'm Salvador's virtual assistant. You can ask me about his cybersecurity skills, education, experience, or how to contact him.";
        }
        
        // About Salvador
        else if (lowerMessage.includes('who are you') || lowerMessage.includes('tell me about yourself') || lowerMessage.includes('about you')) {
            return "I'm Salvador Ferman Sanchez, an aspiring cybersecurity specialist with a strong foundation in computer engineering. I'm bilingual (English/Spanish) and passionate about network security, threat detection, and protecting systems from cyber threats. I'm currently pursuing a Bachelor's degree in Computer Technology at Bowie State University.";
        }
        
        // Cybersecurity Skills
        else if ((lowerMessage.includes('cybersecurity') || lowerMessage.includes('security')) && 
                (lowerMessage.includes('skill') || lowerMessage.includes('know'))) {
            return "I have experience with cybersecurity tools like Wireshark and Nmap. I understand network fundamentals including TCP/IP protocols, router configuration, and modem setup. I'm also knowledgeable about various malware types, phishing techniques, and system vulnerabilities.";
        }
        
        // Technical Skills
        else if (lowerMessage.includes('technical') && lowerMessage.includes('skill')) {
            return "My technical skills include network fundamentals (TCP/IP, routers, modems), basic Linux & Windows operations, and experience with cybersecurity tools like Wireshark and Nmap. I'm continuously expanding my knowledge in these areas through both academic studies and hands-on practice.";
        }
        
        // Skills - General
        else if (lowerMessage.includes('skill') || lowerMessage.includes('experience') || lowerMessage.includes('what can you do')) {
            return "My skills include: 1) Cybersecurity tools like Wireshark and Nmap, 2) Network fundamentals including TCP/IP protocols, 3) Basic Linux & Windows operations, 4) Security awareness including malware identification and phishing detection, and 5) Bilingual communication in English and Spanish.";
        }
        
        // Education
        else if (lowerMessage.includes('education') || lowerMessage.includes('school') || lowerMessage.includes('university') || lowerMessage.includes('degree')) {
            return "I'm currently pursuing a Bachelor of Science in Computer Technology at Bowie State University (started Fall 2022). I previously earned an Associate Degree in Computer Engineering from Prince George's Community College (2019-2022) with coursework in Network Security, Data Structures, and Ethical Hacking.";
        }
        
        // Work Experience
        else if (lowerMessage.includes('job') || lowerMessage.includes('work experience') || lowerMessage.includes('employment')) {
            return "I currently work as a Student Center Event Technician at Bowie State University, where I support the setup and troubleshooting of audiovisual/computing equipment for events. I'm also a Teaching Assistant for freshman computing courses. Previously, I worked at Bath & Body Works from 2018 to 2021.";
        }
        
        // Event Technician Role
        else if (lowerMessage.includes('event') || lowerMessage.includes('technician')) {
            return "As a Student Center Event Technician at Bowie State University, I support the setup and troubleshooting of audiovisual and computing equipment for campus events. This role has strengthened my technical troubleshooting skills and ability to work under pressure to ensure smooth event operations.";
        }
        
        // Teaching Assistant Role
        else if (lowerMessage.includes('teaching') || lowerMessage.includes('assistant') || lowerMessage.includes('ta')) {
            return "As a Teaching Assistant for freshman computing courses at Bowie State University, I assist professors in delivering foundational computing concepts, provide technical support during lab sessions, and offer one-on-one assistance to students. This role has enhanced my communication and leadership skills.";
        }
        
        // Languages
        else if (lowerMessage.includes('language') || lowerMessage.includes('speak') || lowerMessage.includes('spanish')) {
            return "I'm bilingual, with native proficiency in English and professional proficiency in Spanish. This allows me to communicate effectively in diverse environments and with a wider range of stakeholders in cybersecurity contexts.";
        }
        
        // Career Goals
        else if (lowerMessage.includes('goal') || lowerMessage.includes('aspiration') || lowerMessage.includes('future')) {
            return "My career goal is to become a cybersecurity specialist, focusing on network security and threat detection. I'm passionate about protecting organizations from cyber threats and continuously expanding my knowledge in this rapidly evolving field.";
        }
        
        // Tools & Technologies
        else if (lowerMessage.includes('tool') || lowerMessage.includes('software') || lowerMessage.includes('technology')) {
            return "I have experience with cybersecurity tools like Wireshark for network protocol analysis and Nmap for network discovery and security auditing. I'm also familiar with basic Linux and Windows operations, which are essential for cybersecurity work.";
        }
        
        // Wireshark
        else if (lowerMessage.includes('wireshark')) {
            return "I use Wireshark for network protocol analysis, packet capture, and traffic inspection. This tool is essential for understanding network behavior, troubleshooting issues, and identifying potential security threats through packet analysis.";
        }
        
        // Nmap
        else if (lowerMessage.includes('nmap')) {
            return "I'm developing my skills with Nmap, a powerful network scanning tool used for discovery and security auditing. It helps identify open ports, running services, and potential vulnerabilities in network systems.";
        }
        
        // Contact
        else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('reach')) {
            return "You can reach Salvador at Salvador.fermansanchez@gmail.com or by phone at 301-328-7537 or 240-463-1062. He's also on LinkedIn and would be happy to connect professionally.";
        }
        
        // LinkedIn
        else if (lowerMessage.includes('linkedin') || lowerMessage.includes('social media')) {
            return "You can connect with Salvador on LinkedIn to stay updated on his professional journey and cybersecurity projects. Feel free to send a connection request!";
        }
        
        // Projects or Portfolio
        else if (lowerMessage.includes('project') || lowerMessage.includes('portfolio')) {
            return "Salvador is currently developing his cybersecurity portfolio through academic projects and hands-on lab experiences. He's particularly interested in network security analysis and vulnerability assessment projects. Check back soon for updates on his latest work!";
        }
        
        // Strengths
        else if (lowerMessage.includes('strength') || lowerMessage.includes('best at')) {
            return "Salvador's key strengths include technical troubleshooting, attention to detail (crucial for security work), bilingual communication, and a strong commitment to continuous learning in the rapidly evolving cybersecurity field.";
        }
        
        // Thank you
        else if (lowerMessage.includes('thank')) {
            return "You're welcome! Is there anything else you'd like to know about Salvador's cybersecurity background or skills?";
        }
        
        // Default response
        else {
            return "I'm not sure I understand. You can ask about Salvador's cybersecurity skills, education, work experience, or contact information. How can I help you learn more about his qualifications?";
        }
    }
});
