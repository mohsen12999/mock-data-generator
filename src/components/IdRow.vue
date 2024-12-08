
<template>
    <div class="row">
        <label for="add_id">
            <input type="checkbox" name="add_id" class="add_id_flag" />
            add Id for every column start from
            <input type="number" class="id_starter_number" value="1" />
        </label>
    </div>
</template>

<style scoped>
.id_starter_number {
    width: 3rem;
}

label:has(>input[type="checkbox"]:not(:checked)) {
    color: gray;
}

label:has(>input[type="checkbox"]:not(:checked)) input[type="number"] {
    visibility: hidden;
}
</style>