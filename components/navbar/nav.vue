<template>
     <nav class="absolute top-0 z-30 flex flex-wrap items-center justify-between w-full px-4 py-2 mt-6 mb-4 shadow-none lg:flex-nowrap lg:justify-start">

        <img  class="logo" width="150" height="600" src="/assets/images/logo_HD.png"/>
        <div class="items-center w-full pt-4 pb-2 transition-all ease-in-out duration-350 lg-max:max-h-0 lg-max:overflow-auto lg-max:hidden lg-max:bg-white lg-max:shadow-3xl md-max:relative grow basis-full rounded-2xl lg:basis-auto lg:py-0">
            <ul class="flex flex-col pl-0 mx-auto mb-0 list-none md-max:w-full lg:flex-row">
                <NavbarNavitem title="MIS">
                    <NavbarItemsMisitem></NavbarItemsMisitem>
                </NavbarNavitem>
                <NavbarNavitem title="Blog">
                    <NavbarItemsBlogitem></NavbarItemsBlogitem>
                </NavbarNavitem>
                <NavbarNavitem title="TimeTracker">
                    <NavbarItemsAboutitem></NavbarItemsAboutitem>
                </NavbarNavitem>
                <NavbarNavitem title="Interviews">
                    <NavbarItemsAboutitem></NavbarItemsAboutitem>
                </NavbarNavitem>
                <NavbarNavitem title="Reports">
                    <NavbarItemsAboutitem></NavbarItemsAboutitem>
                </NavbarNavitem>
                <NavbarNavitem title="Support">
                    <NavbarItemsAboutitem></NavbarItemsAboutitem>
                </NavbarNavitem>
                <NavbarNavitem title="Employee">
                    <NavbarItemsAboutitem></NavbarItemsAboutitem>
                </NavbarNavitem>
                <NavbarNavitem title="Github" href="github">
                </NavbarNavitem>
            </ul>
        </div>
     </nav>
</template>