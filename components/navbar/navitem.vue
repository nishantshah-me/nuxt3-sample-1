<template>
    <li class="relative mx-2 group md-max:static lg:after:content-[''] lg:after:top-0 lg:hover:after:top-full lg:after:absolute lg:after:left-0 lg:after:-bottom-6 lg:after:w-full lg:after:h-full">
                    <a aria-expanded="false" nav-dropdown-trigger="blogs" role="button" class="flex items-center justify-between px-4 py-2 pl-2 text-sm font-normal transition-all ease-in-out cursor-pointer select-none lg:group-hover:opacity-75 lg-max:text-slate-700 lg:px-2">{{ props.title }}</a>
                    <slot></slot>
                </li>
</template>

<script setup>
const props = defineProps(['title'])
console.log(props.title)
</script>