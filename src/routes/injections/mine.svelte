<script lang="ts">
import Poster from "$components/tuw/Poster.svelte";


</script>

<Poster>
    <div class="row">
        <div class="left">
            <div class="section">
                <h2 class="heading">Intro</h2>
                <ul>
                    <li>Serverless Edge computing could help make edge computing easier, because the underlying infrastructure is abstracted such hat developers don't have to manage it</li>
                    <li>Current serverless frameworks are not adapted for the unique requirements of edge computing, particularly dynamically changing system conditions, as well as heterogeneous hardware and network conditions</li>
                    <li>Despite research efforts, network bound workloads, which are requrests where the network transfer time makes up the majority of the overall response time, remain slow</li>
                </ul>
            </div>
            <div class="section">
                <!-- todo image here -->
            </div>
        </div>
        <div class="right">
            <div class="section">
                <h2 class="heading">Problem Statement</h2>
                <ul>
                    <li>Serverless frameworks aren' adapted to suit edge computing and because of that certain applications, especially network bouond workloads, still perform poorly</li>
                    <li>Initial experiments showed that the origin of this problem lies with load balancers being centralized, and the load balancers making load balancing decisions irrespecive of node performance and location</li>
                    <li>Thus we propose that a methodology be developed that takes these factors into account when making load balancing decisions and scaling or placing load balancer instances</li>  
                </ul>
            </div>
            <div class="section">
                <h2 class="heading">Methodology</h2>
                <ul>
                    <li>We evaluate develop and evaluate our approach through the joint use of real-world experiements on actual hardware and larger scale simulations</li>
                    <li>To this end we extend faas-sim, the distributed systems group's state of the art serverless function simulator</li>
                    <li>We also perform measurements on a cluster using a diverse set of hardware, and then use these results as an empirical basis for further simulation, e.g. through the introduction of accurate resource consumpion data</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="card-row">
        <div class="card-row__left">
            <div class="card-row__left--inner">
                <h2 class="fat-title">Approach</h2>
            </div>
        </div>
        <div class="card-row__right">
            <div class="card-row__right--inner"></div>
        </div>
    </div>
    <div class="row row--middle">
        <div class="left">
            <h2 class="heading">Load Balancer Implementation</h2>
            <div class="white-card">
                <ul>
                    <li>Mean response time acts as a proxy metric for performance and network proximity</li>
                    <li>Load balancing decisions are continually updated and optimized</li>
                </ul>
            </div>
        </div>
        <div class="right">
            <h2 class="heading">Load Balancer Scaling & Scheduling</h2>
            <div class="white-card">
                <ul>
                    <li>Inspired by osmotic pressure</li>
                    <li>Closeness to clients, serverless function replicas, and request rates contribute to pressure</li>
                    <li>If a threshold is exceeded, a load balancer gets placed</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="left">
            <div class="section">
                <h2 class="heading">Results</h2>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
        <div class="right">
            <div class="section">
                <h2 class="heading">Implications</h2>
                <ul>
                    <li>Our approach helps enable new, low latency edge computing applications</li>
                    <li>The proposed solution can help introduce per-function QoS levels, which could help the commercializatino and adoption of edge computing</li>
                    <li>The lack of a singular optimal configuration makes continuous optimization techniques necessary and highlights the complexity of the edge computing environment</li>
                </ul>
            </div>
            <div class="section">
                <h2 class="heading">Future Work</h2>
                <ul>
                    <li>Continued exploration of osmotic scaling and scheduling as a method to deal with the lack of global system knowledge</li>
                    <li>Joint scheduling of serverless functions and load balacers could yield further performance improvements</li>
                    <li>Development of standardized benchmarks and scenarios for evaluating serverless edge computing systems to better compare approaches, particularly from a networking perspective</li>
                </ul>
            </div>
        </div>
    </div>
</Poster>

<style lang="scss">

    .card-row {
        display: grid;
        grid-template-columns: auto 1fr;

        &__left {
            &--inner {
                padding: dpiAdjust(10mm);
                background-color: var(--c-tuw-header-background);
                border-top-left-radius: dpiAdjust(10mm);
                border-top-right-radius: dpiAdjust(10mm);
            }
        }

        &__right {
            background-color: var(--c-tuw-header-background);
            height: 100%;
            // position: relative;
            &--inner {
                background-color: white;
                // height: dpiAdjust(10mm);
                height: 100%;
                border-bottom-left-radius: dpiAdjust(10mm);
            }
        }
    }

    .fat-title {
        font-weight: 700;
        font-size: dpiAdjust(72pt);
        margin: 0;
        color: #7591b7;
    }

    .white-card {
        padding: dpiAdjust(10mm);
        border-radius: dpiAdjust(10mm);
        background-color: white;
    }

    .row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: dpiAdjust(30mm);


        &--middle {
            padding: dpiAdjust(10mm);
            border-radius: dpiAdjust(10mm);
            border-top-left-radius: 0;
            background-color: var(--c-tuw-header-background);
            margin-bottom: dpiAdjust(30mm);
        }
    }

    .section {
        margin-bottom: dpiAdjust(30mm);
    }

    .heading {
        font-size: dpiAdjust(54pt);
        color: #1e5778;
        font-weight: 500;
        margin: 0;
        margin-bottom: dpiAdjust(28pt);
    }

    ul {
        padding-left: dpiAdjust(12.7mm);
    }

    li {
        font-size: dpiAdjust(32pt);
        font-weight: 300;
        margin-bottom: dpiAdjust(4mm);
    }

    .card-header {
        background-color: var(--c-tuw-header-background);
        padding: dpiAdjust(10mm);
        border-top-right-radius: dpiAdjust(10mm);
        border-top-left-radius: dpiAdjust(10mm);
    }
</style>