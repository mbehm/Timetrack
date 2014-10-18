TaskTemplates = new Meteor.Collection('task_templates');
TaskTemplates.allow({
	insert: function(userId, template) {
		template.user_id = userId;
		return !!userId;
	}
})

if (Meteor.isServer) {
	Meteor.publish('task_templates', function() {
		return TaskTemplates.find({user_id: this.userId});
	});
} else if (Meteor.isClient) {
	Meteor.subscribe('task_templates');
}