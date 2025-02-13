<script>
    $: time = "time"
    $: weather = "weather"
</script>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        color: #000000;
        font-weight: bold;
        font-size: 1.5em;
        background: rgba(0, 0, 0, 0.1);
    }
</style>

<div class="header">
    <span>{time}</span>
    <span>Richmond Station</span>
    <span>{weather}</span>
</div>