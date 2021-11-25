import React from 'react';

function Portfolio() {
    return (
        <section id="projects" class="projects">
                <h2 class="section-title">Projects</h2>
                <div class="content">
                    <div class="row">
                        <div class="col-12">
                            <h3 class="projectHeadings">Blog-About-IT</h3>
                            <a href="https://thawing-headland-61830.herokuapp.com/">
                                <img class="project-image" id="blog-about-it-img" src="./assets/images/blog-about-it.png" style="width:575.2px;height:312" alt="Blog-About-IT Technology Blog IT"></img>
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h3 class="projectHeadings">Work-Days</h3>
                            <a href="https://project-two-scheduler.herokuapp.com/">
                                <img class="project-image" id="create-a-date-img" src="./assets/images/workdays.png" style="width:575.2px;height:312" alt="Work-Days Date Work Employee Manager Scheduler"></img>
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h3 class="projectHeadings">Create-A-Date</h3>
                            <a href="https://wamackie.github.io/create-a-date/">
                                <img class="project-image" id="create-a-date-img" src="./assets/images/createdate.png" style="width:575.2px;height:312" alt="Create-A-Date Date Planning Scheduler"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Portfolio;