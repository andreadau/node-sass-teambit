import Vue from 'vue';

let vm = new Vue({
    el: "#app",
    data: {
        navbar: [
            {
                name: "Solutions",
                icon: "fas fa-chevron-down",
                link: "#"
            },
            {
                name: "Pricing",
                icon: "fas",
                link: "#"
            },
            {
                name: "Blog",
                icon: "fas",
                link: "#"
            },
            {
                name: "Sing in",
                icon: "fas",
                link: "#"
            },
        ],
        topCard: [
            {
                img: "dist/img/hardcore.png",
                text: "They are hardcore: formal and disconnected"
            },            {
                img: "dist/img/nofeedback.png",
                text: "They don't encourage regular feedback"
            },            {
                img: "dist/img/notsafe.png",
                text: "They don't make it safe to speak up"
            },
        ],
        bottomCard: [
            {
                img: "dist/img/lightweight.png",
                text: "It's lightweight fun and interconnected"
            },            {
                img: "dist/img/feedbacksuggestions.png",
                text: "It encourages regular feedback with contextual requests"
            },            {
                img: "dist/img/safe.png",
                text: "It creates a safe environment for dialog"
            },
        ]
    },
    methods: {

    }
});