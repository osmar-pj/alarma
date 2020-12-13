<template>
  <div id="app" class="section">
    <h1 class="title">ALARMA SOLAR</h1>
     <div class="field">
        <b-switch @input="activar" v-model="active">Desactivar alarma</b-switch>
    </div>
    <b-table
        :data="isEmpty ? [] : data">

        <b-table-column field="id" label="ID" width="40" numeric v-slot="props">
            {{ props.row.id }}
        </b-table-column>

        <b-table-column field="first_name" label="sensor" v-slot="props">
            {{ props.row.sensor }}
        </b-table-column>

        <b-table-column field="last_name" label="Alarma" v-slot="props">
            <span class="tag is-danger" v-if="props.row.alarma">
                {{ props.row.alarma }}
            </span>
            <span class="tag is-success" v-if="!props.row.alarma">
                {{ props.row.alarma }}
            </span>
        </b-table-column>

        <b-table-column field="date" label="Date" centered v-slot="props">
            <span class="tag is-success">
                {{ new Date(props.row.createdAt).toLocaleDateString() }}
            </span>
        </b-table-column>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  mounted() {
    this.$socket.on('alarm', (data) => {
      this.alarmStatus = data
      this.data[0].alarma = !!this.alarmStatus.pir
      this.data[1].alarma = !!this.alarmStatus.puerta_peq
      this.data[2].alarma = !!this.alarmStatus.puerta_gra
    })
  },
  data() {
    return {
      alarmStatus: {},
      baseURL: `http://192.168.43.186:${process.env.VUE_APP_SOCKET_PORT}`,
      //baseURL: `http://osmarpj.com`,
      data: [
        { id: 1, sensor: 'Presencia', alarma: false },
        { id: 2, sensor: 'Puerta G', alarma: false },
        { id: 3, sensor: 'Puerta P', alarma: false }
      ],
      active: false
    }
  },
  methods: {
    activar() {
      axios.post(`${this.baseURL}/api/activar`, { active: this.active })
      .then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
