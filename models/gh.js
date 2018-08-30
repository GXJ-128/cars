var mongoose = require("mongoose");
var HuanSchema = new mongoose.Schema({
	id: Number,
    yonghuming: String,
    name:String,
    time:String,
	price:Number,
	yajin:Number,
	he:Number
})
// 验证学号是否存在
HuanSchema.statics.checkSid = function (id, callback) {
	this.find({ "id": id }, function (err, results) {
		callback(results.length == 0);
	})
}
// 增加学生
HuanSchema.statics.addhuan= function (json, callback) {
	Huan.checkSid(json.id, function (torf) {
		if (torf) {
			var s = new Huan(json);
			s.save(function (err) {
				if (err) {
					callback(-2);
					return;
				}
				callback(1);
			})
        } 
        else {
			callabck(-1);
		}
	})
}
// 类
var Huan = mongoose.model("huan", HuanSchema);
module.exports = Huan;