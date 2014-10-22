updateEnvironment();


$('#actions-input').on('keyup',function(e) {
    var command = ''; // Player input command.

    // 1. Take action when ENTER is hit.
    if ( e.keyCode === 13 ) {
        var actions_html = $('#actions').html();
        var actions_input = $('#actions-input');

        // 2. Display the action in the actions div.
        $('#actions').html( actions_html + '<br/>' + actions_input.val() );

        // 3. Delete actions-input text.
        command = actions_input.val();
        actions_input.val('');

        // 4. TAKE ACTION
        switch(command){
            case 'n':
                player.location_y += 1;
                updateEnvironment();
                break;
            case 's':
                player.location_y -= 1;
                updateEnvironment();
                break;
            case 'e':
                player.location_x += 1;
                updateEnvironment();
                break;
            case 'w':
                player.location_x -= 1;
                updateEnvironment();
                break;

            default:
                break;
        }

        // 5. TODO: add scroll, bar, or array to limit actions.  Keep "actions" verbiage.
    }
});

function updateEnvironment(){
    // TODO: handle when out of bounds... ie if you cant go any further north.
    var environment = $('#environment');

    environment.html( 'environment<br/>' + world_arr[player.location_x][player.location_y] );
}