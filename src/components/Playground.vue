<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Categories">
        </ActionBar>
        <ScrollView orientation="vertical">
            <AbsoluteLayout backgroundColor="#3c495e">
                <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
                <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
                <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
                <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
            </AbsoluteLayout>
       </ScrollView>
    </Page>
</template>


<script>

var application = require('application');

  export default {
      created() {
        
        if (application.android) {
            console.log('ANDRUSHA!')
            application.android.on(application.AndroidApplication.activityBackPressedEvent, (args) => {
                console.log(args, 'EVENT BACK')
                args.cancel = true; 
            });
        }

        application.on(application.orientationChangedEvent, function(args){
            console.log(args.newValue);
        });

      }
  };

</script>