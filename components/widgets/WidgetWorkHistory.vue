<template>
  <div class="slice-table">
    <h2>Work history</h2>
    <div class="table-container hidden-sm">
      <table class="table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Role</th>
            <th>Company</th>
            <th>City</th>
            <th>Projects</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in work" :key="index">
            <td v-for="cell in item" :key="cell.company">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="by-year visible-sm">
      <div
        class="block-year"
        v-for="(year, index) in groupByYear"
        :key="'year-' + index"
      >
        <h3>{{ year[0].year }}</h3>
        <div class="block-jobs">
          <div class="block-job" v-for="job in year" :key="job.company">
            <div class="job-title">{{ job.role }} at {{ job.company }}</div>
            <div class="job-location">{{ job.city }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      work: [
        {
          year: 2019,
          role: "Head of Product",
          company: "FreeBird",
          city: "Chicago",
          projects: 1
        },
        {
          year: 2019,
          role: "Event Organizer",
          company: "Amsterdam UX",
          city: "Amsterdam",
          projects: 2
        },
        {
          year: 2018,
          role: "Product Designer",
          company: "Adyen",
          city: "Amsterdam",
          projects: 16
        },
        {
          year: 2017,
          role: "Senior Designer",
          company: "Kite.ly",
          city: "London",
          projects: 4
        },
        {
          year: 2015,
          role: "UX/UI Designer",
          company: "ucreate.it",
          city: "London",
          projects: 13
        },
        {
          year: 2014,
          role: "UX/UI Designer",
          company: "PayU",
          city: "Warsaw",
          projects: 4
        },
        {
          year: 2012,
          role: "Senior Graphic Designer",
          company: "AdPilot",
          city: "Warsaw",
          projects: 5
        },
        {
          year: 2009,
          role: "Visual Designer",
          company: "Cisco",
          city: "Warsaw",
          projects: 1
        },
        {
          year: 2009,
          role: "Visual Designer",
          company: "Asus",
          city: "Warsaw",
          projects: 1
        },
        {
          year: 2009,
          role: "Visual Designer",
          company: "Orsay",
          city: "Warsaw",
          projects: 20
        },
        {
          year: 2009,
          role: "Visual Designer",
          company: "PepsiCo",
          city: "Warsaw",
          projects: 1
        },
        {
          year: 2006,
          role: "Unicorn",
          company: "Freelance",
          city: "Everywhere",
          projects: 10
        }
      ]
    };
  },
  computed: {
    groupByYear() {
      const groupByYear = _.groupBy(this.work, "year");
      return _.orderBy(groupByYear, ["year"], ["desc"]);
    }
  }
};
</script>

<style lang="scss">
.table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
th,
td {
  border-bottom: 2px solid lighten($grey-medium, 50%);
  padding: 8px 0;
  text-align: left;
  &:last-child {
    text-align: right;
  }
}
.block-year {
  > h3 {
    color: $primary;
  }
}
.block-jobs {
  padding: 1em;
}
.block-job {
  &:not(:last-child) {
    margin-bottom: 1em;
  }
}
.job-location {
  color: $grey-medium;
}
</style>
