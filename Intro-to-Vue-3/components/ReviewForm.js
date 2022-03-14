app.component("review-form", {
  props: {},
  template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name" />

    <label for="review">Review:</label>
    <textarea id="review" v-model="review" />

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
    </select>

    <label for="rating">Would you recommend this product?</label>
    <input type="checkbox" id="recommend" v-model="recommends" />

    <input class="button" type="submit" value="Submit" />
    </form>
    `,
  data() {
    return {
      name: "",
      review: "",
      rating: null,
      recommends: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.name === "" || this.review === "" || this.rating === null) {
        alert("Review not filled out!");
        return;
      }

      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommends: this.recommends,
      };

      this.$emit("review-submitted", productReview);

      this.name = "";
      this.review = "";
      this.rating = null;
      this.recommends = false;
    },
  },
  computed: {},
});
