var realtime = new Ably.Realtime({ key: '4ZrbOw.-jYoOQ:NkgyRYo-gCiW1N_n' });
var myVotingChannel = realtime.channels.get('voting-channel');
var castVote = function(choice) {
    myVotingChannel.publish('vote', choice, (err)=>{
        console.log(err);
        console.log(choice);
    });
}