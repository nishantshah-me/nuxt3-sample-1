<template>
    <li class="relative mx-2 group md-max:static lg:after:content-[''] lg:after:top-0 lg:hover:after:top-full lg:after:absolute lg:after:left-0 lg:after:-bottom-6 lg:after:w-full lg:after:h-full">
                    <a aria-expanded="false" nav-dropdown-trigger="blogs" role="button" class="flex items-center justify-between px-4 py-2 pl-2 text-sm font-normal transition-all ease-in-out cursor-pointer select-none lg:group-hover:opacity-75 lg-max:text-slate-700 lg:px-2">{{ props.title }}</a>
                    <div nav-dropdown="blogs" class="sm-max:right-auto md-max:left-0 md-max:right-0 lg-max:bg-transparent lg-max:overflow-scroll lg-max:relative lg-max:shadow-none lg-max:transform-none lg-max:block lg-max:h-0 lg-max:transition-all lg-max:duration-350 lg-max:ease lg-max:pt-0 lg-max:pb-0 lg-max:opacity-0 lg-max:top-0 lg-max:origin-top lg-max:pointer-events-none  static p-4 m-0 mt-0 text-left list-none bg-white rounded-2xl lg:mt-4 lg:min-w-160 lg:absolute z-100 text-sm text-slate-500 bg-clip-padding lg:shadow-3xl lg:cursor-pointer lg:transition-all lg:duration-250 lg:block lg:group-focus:pointer-events-auto lg:group-focus:transform-dropdown-show lg:group-focus:opacity-100 lg:group-focus:before:-top-5 lg:group-hover:opacity-100 lg:opacity-0 lg:top-0 lg:origin-top lg:group-hover:pointer-events-auto lg:group-hover:transform-dropdown-show lg:pointer-events-none lg:transform-dropdown lg:before:font-awesome lg:before:content-['\f0d8'] lg:before:absolute lg:before:top-0 lg:group-hover:before:-top-4.8  lg:before:left-7 lg:before:right-auto lg:before:text-5.5 lg:before:text-white lg:before:transition-all lg:before:duration-350 lg:before:ease">
                        This is test
                    </div>
                </li>
</template>

<script setup>
const props = defineProps(['title'])
console.log(props.title)
</script>