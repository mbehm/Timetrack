Template.tasksShow.events({
	'click .quick-start': function() {
		alert('quick start');
	},
	'click .add-template': function() {
		TaskTemplates.insert({name: 'Testing', desc: 'Whee?!'});
	},
	'click .task-template': function(evt) {
		var tpl = TaskTemplates.findOne({user_id: Meteor.userId(), _id: $(evt.target).data('id')});
		Tasks.insert({
			name: tpl.name,
			desc: tpl.desc,
			running: true,
			spans: [
				{started_at: new Date()}
			]
		})
	}
});

Template.tasksShow.helpers({
	templates: function() {
		return TaskTemplates.find({user_id: Meteor.userId()});
	},
});

UI.registerHelper('runningTasks', function() {
	return Tasks.find({running: true});
});