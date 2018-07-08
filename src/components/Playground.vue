<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Categories">
        </ActionBar>
        <Label :text="myOrientation" />
    </Page>
</template>


<script>

var application = require('application');
import { isAndroid, isIOS } from "platform";



var or = function(){
    return 'default';
}

  export default {
      created() {
        
        if (isAndroid) {
            console.log('ANDRUSHA!')
            application.android.on(application.AndroidApplication.activityBackPressedEvent, (args) => {
                console.log(args, 'EVENT BACK')
                args.cancel = true; 
            });
        }

        application.on(application.orientationChangedEvent, function(args){
            // this.$store.state.orientation = args.newValue;
            tmp = args.newValue;
            or = function(){
                return tmp;
            }
        });
      },

      computed: {
          myOrientation: or
      }
  };

</script>