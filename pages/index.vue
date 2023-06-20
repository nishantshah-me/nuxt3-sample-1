<template>
    <div>
        <div>
            <i class="fa-solid cc-discover"></i>
            <Icon name="uil:github" color="black" />

        </div>

        <Navbar></Navbar>
        <div>
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
        </div>
       
        <h2>
            Hello world!
        </h2>
        <hr class="hr"/>
        <TablesBootstrapTable />

        <!-- Element card  -->
        <div class="m-5">
             <h3>Element Card</h3>
            <CardsElementCard />
        </div>

        <!-- Element button  -->
        <div class="m-5">
            <el-row class="mb-4">
                    <el-button>Default</el-button>
                    <el-button type="primary">Primary</el-button>
                    <el-button type="success">Success</el-button>
                    <el-button type="info">Info</el-button>
                    <el-button type="warning">Warning</el-button>
                    <el-button type="danger">Danger</el-button>
            </el-row>

            <el-row class="mb-4">
                    <el-button plain>Plain</el-button>
                    <el-button type="primary" plain>Primary</el-button>
                    <el-button type="success" plain>Success</el-button>
                    <el-button type="info" plain>Info</el-button>
                    <el-button type="warning" plain>Warning</el-button>
                    <el-button type="danger" plain>Danger</el-button>
            </el-row>

            <el-row class="mb-4">
                    <el-button round>Round</el-button>
                    <el-button type="primary" round>Primary</el-button>
                    <el-button type="success" round>Success</el-button>
                    <el-button type="info" round>Info</el-button>
                    <el-button type="warning" round>Warning</el-button>
                    <el-button type="danger" round>Danger</el-button>
            </el-row>
        </div>

        <!-- Element Date picker  -->
        <div class="m-5">
            <h3>Date Picker</h3>
            <el-date-picker
                v-model="value1"
                type="date"
                placeholder="Pick a day"
                :size="size"
            />
        </div>
        <el-divider />

        <!-- Element form  -->
        <div class="m-5">
            <h3>Element Form with validation</h3>
            <Form/>
        </div>
         <el-divider />

         <!-- Element switch  -->
        <div class="m-5">
             <h3> Element Switch</h3>
            <Switch />
        </div>
         <el-divider />

        <!-- Element Image upload  -->
        <div class="m-5">
            <h3>Element Image Upload</h3>
            <Upload />
        </div>
         <el-divider />

        <!-- Element calender  -->
        <div class="m-5">
            <h3>Element Calender</h3>
            <Calender />
        </div>

         <!-- Element Tab  -->
        <div class="m-5">
            <h3>Element Tabs</h3>
            <Tab />
        </div>

         <!-- Element table  -->
        <div class="m-5">
            <h3>Element Table</h3>
            <TablesElementTable />
        </div>
        <hr class="hr"/>
        <TablesTable></TablesTable>
    </div>
</template>