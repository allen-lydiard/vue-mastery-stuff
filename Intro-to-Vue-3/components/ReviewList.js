app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }}: {{review.rating}} / 5 stars and does {{review.recommends ? '' : 'NOT'}} recommend this product
                <br />
                "{{ review.review }}"
            </li>
        </ul>
    </div> 
      `,
  data() {
    return {};
  },
  methods: {},
  computed: {},
});
