<template>
    <div class="workspace-statistics">
        <Line :data="chartData" :options="chartOptions" />
    </div>
</template>

<script setup>

import {Line} from "vue-chartjs";
import {ref} from "vue"

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    PointElement,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement
} from 'chart.js';

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    PointElement,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement
);
const chartData = ref({
    labels: [ 'January', 'February', 'March', 'April', 'May' ],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 43, 67],
        fill: false,
        borderColor: 'blue',
        tension: 0.1
    }]
});
const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
});
</script>

<style scoped>

</style>