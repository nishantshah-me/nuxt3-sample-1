<template>
     <nav class="absolute top-0 z-30 flex flex-wrap items-center justify-between w-full px-4 py-2 mt-6 mb-4 shadow-none lg:flex-nowrap lg:justify-start">
        <a href="#">Hexafold Technologies</a>
        <div class="items-center w-full pt-4 pb-2 transition-all ease-in-out duration-350 lg-max:max-h-0 lg-max:overflow-auto lg-max:hidden lg-max:bg-white lg-max:shadow-3xl md-max:relative grow basis-full rounded-2xl lg:flex lg:basis-auto lg:py-0">
            <ul class="flex flex-col pl-0 mx-auto mb-0 list-none md-max:w-full lg:flex-row">
                <li class="relative mx-2 group md-max:static lg:after:content-[''] lg:after:top-0 lg:hover:after:top-full lg:after:absolute lg:after:left-0 lg:after:-bottom-6 lg:after:w-full lg:after:h-full"> <a aria-expanded="false" nav-dropdown-trigger="pages" role="button" class="flex items-center justify-between px-4 py-2 pl-2 text-sm font-normal transition-all ease-in-out cursor-pointer select-none lg:group-hover:opacity-75 lg-max:text-slate-700 lg:px-2">
                    MIS
                    <img src="assets/images/down-arrow-white.svg" alt="down-arrow" class="hidden ml-1 lg:block">
                    <img src="assets/images/down-arrow-dark.svg" alt="down-arrow" class="block ml-1 lg:hidden">
                    </a>
                    <div nav-dropdown="pages" class="sm-max:right-auto md-max:left-0 md-max:right-0 lg-max:bg-transparent lg-max:overflow-scroll lg-max:relative lg-max:shadow-none lg-max:transform-none lg-max:block lg-max:h-0 lg-max:transition-all lg-max:duration-350 lg-max:ease lg-max:pt-0 lg-max:pb-0 lg-max:opacity-0 lg-max:top-0 lg-max:origin-top lg-max:pointer-events-none  static p-4 m-0 mt-0 text-left list-none bg-white rounded-2xl lg:mt-4 lg:min-w-160 lg:absolute z-100 text-sm text-slate-500 bg-clip-padding lg:shadow-3xl lg:cursor-pointer lg:transition-all lg:duration-250 lg:block lg:group-focus:pointer-events-auto lg:group-focus:transform-dropdown-show lg:group-focus:opacity-100 lg:group-focus:before:-top-5 lg:group-hover:opacity-100 lg:opacity-0 lg:top-0 lg:origin-top lg:group-hover:pointer-events-auto lg:group-hover:transform-dropdown-show lg:pointer-events-none lg:transform-dropdown lg:before:font-awesome lg:before:content-['\f0d8'] lg:before:absolute lg:before:top-0 lg:group-hover:before:-top-4.8  lg:before:left-7 lg:before:right-auto lg:before:text-5.5 lg:before:text-white lg:before:transition-all lg:before:duration-350 lg:before:ease">
                    <div class="flex-wrap hidden -mx-3 lg:flex">
                        <div class="w-full max-w-full px-6 py-2 flex-0">
                        <div class="flex flex-wrap -mx-3">
                            <div class="relative w-4/12 max-w-full px-3 flex-0">
                            <div class="flex items-center px-0 py-2 mb-0 text-sm font-bold whitespace-nowrap text-slate-700 ">
                                <i class="mr-4 text-blue-500 ni ni-spaceship"></i>
                                <!-- <i class="mr-4 text-blue-500 ni ni-spaceship"></i> -->
                                Dashboards
                            </div>
                            <a href="../../pages/dashboards/default.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">Default</span>
                            </a>
                            <a href="../../pages/dashboards/automotive.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">Automotive</span>
                            </a>
                            <a href="../../pages/dashboards/smart-home.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">Smart Home</span>
                            </a>
                            <a href="../../pages/dashboards/vr/vr-default.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">Virtual Reality</span>
                            </a>
                            <a href="../../pages/dashboards/crm.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">CRM</span>
                            </a>
                            <div class="flex items-center px-0 py-2 mb-0 text-sm font-bold whitespace-nowrap text-slate-700 ">
                                <i class="mr-4 text-blue-500 ni ni-circle-08"></i>
                                Users
                            </div>
                            <a href="../../pages/pages/users/reports.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">Reports</span>
                            </a>
                            <a href="../../pages/pages/users/new-user.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">New User</span>
                            </a>
                            <hr class="absolute top-0 right-0 w-px h-full bg-transparent bg-gradient-to-b from-transparent via-black/40 to-transparent">
                            </div>
                            <div class="relative w-4/12 max-w-full px-3 flex-0">
                            <div class="flex items-center px-0 py-2 mb-0 text-sm font-bold whitespace-nowrap text-slate-700 ">
                                <i class="mr-4 text-blue-500 ni ni-badge"></i>
                                Profile
                            </div>
                            <a href="../../pages/pages/profile/overview.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">Overview</span>
                            </a>
                            <a href="../../pages/pages/profile/teams.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">Teams</span>
                            </a>
                            <a href="../../pages/pages/profile/projects.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">Projects</span>
                            </a>
                            <div class="flex items-center px-0 py-2 mb-0 text-sm font-bold whitespace-nowrap text-slate-700 ">
                                <i class="mr-4 text-blue-500 ni ni-app"></i>
                                Projects
                            </div>
                            <a href="../../pages/pages/projects/general.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">General</span>
                            </a>
                            <a href="../../pages/pages/projects/timeline.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">Timeline</span>
                            </a>
                            <a href="../../pages/pages/projects/new-project.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">New Project</span>
                            </a>
                            <hr class="absolute top-0 right-0 w-px h-full bg-transparent bg-gradient-to-b from-transparent via-black/40 to-transparent">
                            </div>
                            <div class="w-4/12 max-w-full px-3 flex-0">
                            <div class="flex items-center px-0 py-2 mb-0 text-sm font-bold whitespace-nowrap text-slate-700 ">
                                <i class="mr-4 text-blue-500 ni ni-single-02"></i>
                                Account
                            </div>
                            <a href="../../pages/pages/account/settings.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">Settings</span>
                            </a>
                            <a href="../../pages/pages/account/billing.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">Billing</span>
                            </a>
                            <a href="../../pages/pages/account/invoice.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">Invoice</span>
                            </a>
                            <a href="../../pages/pages/account/security.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">Security</span>
                            </a>
                            <div class="flex items-center px-0 py-2 mb-0 text-sm font-bold whitespace-nowrap text-slate-700 ">
                                <i class="mr-4 text-blue-500 ni ni-folder-17"></i>
                                Extra
                            </div>
                            <a href="../../pages/pages/pricing-page.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">Pricing Page</span>
                            </a>
                            <a href="../../pages/pages/chat.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">Messages</span>
                            </a>
                            <a href="../../pages/pages/rtl-page.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">RTL Page</span>
                            </a>
                            <a href="../../pages/pages/widgets.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 lg:transition-colors lg:duration-300 lg:ease rounded-lg">
                                <span class="pl-4">Widgets</span>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>


                    <div class="lg:hidden">
                        <div class="flex items-center py-2 mb-0 text-sm font-bold whitespace-nowrap text-slate-700">
                        <i class="mr-4 text-blue-500 ni ni-spaceship"></i>
                        Dashboards
                        </div>
                        <a href="../../pages/dashboards/default.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        Default
                        </a>
                        <a href="../../pages/dashboards/automotive.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        Automotive
                        </a>
                        <a href="../../pages/dashboards/smart-home.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        Smart Home
                        </a>
                        <a href="../../pages/dashboards/vr/vr-default.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        Virtual Reality
                        </a>
                        <a href="../../pages/dashboards/crm.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        CRM
                        </a>
                        <div class="flex items-center py-2 mt-4 mb-0 text-sm font-bold whitespace-nowrap text-slate-700">
                        <i class="mr-4 text-blue-500 ni ni-circle-08"></i>
                        Users
                        </div>
                        <a href="../../pages/pages/users/reports.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        Reports
                        </a>
                        <a href="../../pages/pages/users/new-user.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        New user
                        </a>
                        <div class="flex items-center py-2 mt-4 mb-0 text-sm font-bold whitespace-nowrap text-slate-700">
                        <i class="mr-4 text-blue-500 ni ni-badge"></i>
                        Profile
                        </div>
                        <a href="../../pages/pages/profile/overview.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        Overview
                        </a>
                        <a href="../../pages/pages/profile/teams.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        Teams
                        </a>
                        <a href="../../pages/pages/profile/projects.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        Projects
                        </a>
                        <div class="flex items-center py-2 mt-4 mb-0 text-sm font-bold whitespace-nowrap text-slate-700">
                        <i class="mr-4 text-blue-500 ni ni-app"></i>
                        Projects
                        </div>
                        <a href="../../pages/pages/projects/general.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        General
                        </a>
                        <a href="../../pages/pages/projects/timeline.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        Timeline
                        </a>
                        <a href="../../pages/pages/projects/new-project.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        New Project
                        </a>
                        <div class="flex items-center py-2 mt-4 mb-0 text-sm font-bold whitespace-nowrap text-slate-700">
                        <i class="mr-4 text-blue-500 ni ni-single-02"></i>
                        Account
                        </div>
                        <a href="../../pages/pages/account/settings.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        Settings
                        </a>
                        <a href="../../pages/pages/account/billing.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        Billing
                        </a>
                        <a href="../../pages/pages/account/invoice.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        Invoice
                        </a>
                        <a href="../../pages/pages/account/security.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        Security
                        </a>
                        <div class="flex items-center py-2 mt-4 mb-0 text-sm font-bold whitespace-nowrap text-slate-700">
                        <i class="mr-4 text-blue-500 ni ni-folder-17"></i>
                        Extra
                        </div>
                        <a href="../../pages/pages/pricing-page.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        Pricing Page
                        </a>
                        <a href="../../pages/pages/chat.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        Messages
                        </a>
                        <a href="../../pages/pages/rtl-page.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        RTL Page
                        </a>
                        <a href="../../pages/pages/widgets.html" class="hover:text-slate-700 hover:bg-gray-200 block w-full px-4 py-1.2 clear-both font-normal text-slate-500 text-align-inherit whitespace-nowrap bg-transparent border-0 rounded-lg">
                        Widgets
                        </a>
                    </div>
                    </div>
                </li>
                <NavbarNavitem title="Blog"></NavbarNavitem>
                <NavbarNavitem title="About"></NavbarNavitem>
            </ul>
        </div>
     </nav>
</template>