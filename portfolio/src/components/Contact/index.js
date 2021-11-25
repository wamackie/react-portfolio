import React from 'react';

function Contact() {
    return (
        <section id="contact">
                <h2 class="contact-title">Contact</h2>
                <div class="contact">
                    <div class="contact-info">
                        <div class="socials">
                            <div class="social row">
                                <div class="col-4">
                                    <a href="https://github.com/wamackie8456">
                                        <img class="social-img" id="github-img" img src="./assets/images/github.png" style="width:120px;height:50px" alt="Github Logo" />
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="https://www.linkedin.com/in/william-mackie-2521b4211/">
                                        <img class="social-img" id="linkedin-img" src="./assets/images/linkedin.png" style="width:50px;height:50px" alt="LinkedIn Logo" />
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="https://www.instagram.com/wam1124/">
                                        <img class="social-img" id="instagram-img" src="./assets/images/instagram.png" style="width:50px;height:50px" alt="Instagram Logo">
                                    </a>
                                </div>
                            </div>
                        </div>
                </div>
            </section>   
    )
}