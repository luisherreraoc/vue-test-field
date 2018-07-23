<template>
  <div class="pagination-component">
    <ul v-show="totalPages > 1" class="pagination">
      <li class="arrow">
        <!-- javascript:void(0) evaluates to undefined, therefore the browser does not redirect anywhere on click -->
        <a class="page-link" href="javascript:void(0)" @click="prev">&lt;</a>
      </li>

      <li :class="activeClass(pageNum)" v-for="pageNum in totalPages" :key="pageNum">
        <a class="page-link" href="javascript:void(0)" @click="setPage(pageNum)">{{ pageNum }}</a>
      </li>

      <li class="arrow">
        <a class="page-link" href="javascript:void(0)" @click="next">&gt;</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      default: 10
    }
  },
  model: {
    prop: 'currentPage',
    event: 'page-change'
  },
  data: function() {
    return { 
        page: 1
    }
  },
  watch: {
    currentPage: function(val) {
      this.page = val
    }
  },
  computed: {
    totalPages: function() {
      return this.items ? Math.ceil(this.items / this.perPage) : 1
    }
  },
  methods: {
    setPage: function(page) {
      if (this.allowedPage(page)) {
        this.page = page
        this.$emit('page-change', page)
      }
    },
    next: function() {
      return this.setPage(this.page + 1)
    },
    prev: function() {
      return this.setPage(this.page - 1)
    },
    allowedPage: function(page) {
      return page >= 1 && page <= this.totalPages
    },
    activeClass: function(page) {
      return this.page == page ? 'active' : ''
    }
  }
}
</script>

<style scoped>
.pagination-component {
    text-align: center;
}

.pagination {
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    padding: 15px 70px;
}

a {
    text-decoration: none;
    color: gray;
    padding: 5px;
}

li {
    width: 20%;
    background-color: rgb(221, 235, 232);
    box-shadow: 3px 3px rgb(210, 224, 221);
}

.active {
    background-color: rgb(210, 224, 221);
}

.active a {
    color: black;
}

</style>