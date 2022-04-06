<template>
  <section class="main-app flex col">
    <!-- <div class="curvy"><img src="../assets/img/bg-curvy-desktop.svg"></div> -->
    <div class="intro flex col">
      <div class="intro-img">
        <img src="../assets/img/illustration-intro.png" alt="" />
      </div>
      <div class="main-text">
        All your files in one secure location, accessible anywhere.
      </div>
      <div class="main-subtext">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </div>

      <button class="btn get-started">Get Started</button>
    </div>

    <div class="options-container">
      <option-preview
        v-for="option in options"
        :option="option"
        :key="option"
      />
    </div>

    <div class="productive flex">
      <div class="productive-img">
        <img src="../assets/img/illustration-stay-productive.png" alt="" />
      </div>
      <div class="productive-text flex col">
        <div class="title">Stay productive, wherever you are</div>
        <div class="text">
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <button class="productive-link">
            See how Fylo works
            <img class="arrow" src="../assets/img/icon-arrow.svg" />
          </button>
        </div>
      </div>
    </div>
    <div class="testimonials-container flex justify-center">
      <testimonial-preview
        v-for="testimonial in testimonials"
        :testimonial="testimonial"
        :key="testimonial"
      />
    </div>

    <div class="signup">
      <div class="title flex col">Get early access today</div>
      <div class="subtext">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </div>
      <input type="email" name="" id="" placeholder="email@example.com"/>
      <button class="btn get-started">Get Started</button>
    </div>
  </section>
</template>

<script>
import optionPreview from "../components/option-preview.vue";
import testimonialPreview from "../components/testimonial-preview.vue";
export default {
  // props: [''],
  components: {
    optionPreview,
    testimonialPreview,
  },
  created() {},
  data() {
    return {
      options: [
        {
          img: "./src/assets/img/icon-access-anywhere.svg",
          title: "Access your files, anywhere",
          desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        },

        {
          img: "./src/assets/img/icon-security.svg",
          title: "Security you can trust",
          desc: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
        },

        {
          img: "./src/assets/img/icon-collaboration.svg",
          title: "Real-time collaboration",
          desc: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
        },

        {
          img: "./src/assets/img/icon-any-file.svg",
          title: "Store any type of file",
          desc: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
        },
      ],
      testimonials: [
        {
          img: "./src/assets/img/profile-1.jpg",
          name: "Satish Patel",
          position: "Founder & CEO, Huddle",
          content:
            "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        },
        {
          img: "./src/assets/img/profile-2.jpg",
          name: "Bruce McKenzie",
          position: "Founder & CEO, Huddle",
          content:
            "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        },
        {
          img: "./src/assets/img/profile-3.jpg",
          name: "Bruce McKenzie",
          position: "Founder & CEO, Huddle",
          content:
            "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        },
      ],
    };
  },
  methods: {},
  computed: {},
  unmounted() {},
};
</script>
