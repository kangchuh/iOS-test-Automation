/**
 *测试入口，每个测试脚本都作为参数在这个方法中运行。
 *第一个参数为该用例的名称，用例运行结束可以根据该名称在日志中找到该用例的运行日志。
 *第二个参数为一个方法，里面为该用例的具体执行步骤，传入该方法会在test中调用执行以便统一捕获异常、记录日志。
 *第三个参数为可选参数，该参数标志是否在用例出错是往日志打印出控件对象的树结构。
 *
 *使用示例：
 *test("Login", function(target,application){
 *	//case steps and validates
 *}, false);
 */

function test(title, f, options) {
	try {
	if (arguments.length == 2) {
	    options = {
	      logTree: true
	    };
	}
	target = UIATarget.localTarget();
	application = target.frontMostApp();
	UIALogger.logStart("The case ' " + title + " ' is running.");
	
	    f(target, application);
	    UIALogger.logPass("The case ' " + title + " ' was passed.");
		target.delay(1);
	}
	catch (e) {
	  	if(e instanceof Error) {
			e.log();
		} else {
			UIALogger.logError(e.toString() +" # log.type == error!" );
		}
	    if (options.logTree) 
	    	target.logElementTree();
	    UIALogger.logFail("The case ' " + title + " ' was failed.");
	}	

}
