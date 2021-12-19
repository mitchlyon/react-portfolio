import React from 'react'

function Work() {

    return (
        <section id="work" class="work">
            <div>
                <h2>Work</h2>
            </div>
            <a href="https://mitchlyon.github.io/run-buddy/" alt="Run Buddy" class="project">
                <div class="run-buddy">
                    <h3>Run Buddy</h3>
                    <h4>HTML/CSS</h4>

                </div>
            </a>

            <a href="https://joseepina.github.io/bc-project-01/" alt="Spotify API" class="project">
                <div class="project-2">
                    <h3>Spotify API</h3>
                    <h4>Front end</h4>

                </div>
            </a>

            <a href="https://github.com/andydhpkp/pass-stache" alt="Pass Stache" class="project">
                <div class="project-3">
                    <h3>Pass Stache</h3>
                    <h4>Full Stack Application</h4>

                </div>
            </a>

            <a href="https://mitchlyon.github.io/weather-dashboard/" alt="Weather Dashboard" class="project">
                <div class="project-4">
                    <h3>Weather Dashboard</h3>
                    <h4>API</h4>

                </div>
            </a>

            {/* <a href="https://mitchlyon.github.io/run-buddy/" class="project">
                <div class="project-5">
                    <h3>Future</h3>
                    <h4>project</h4>

                </div>
            </a> */}

        </section>
    );
}

export default Work;