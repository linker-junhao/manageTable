# ManageTable
基于element的table和axios，本组件封装了增删改查等基本操作的表格样式管理组件

### update log
* 2020年11月2日：
在columnsDefinition中增加表头渲染函数选项

* 2020年10月30日：
增加合并行列的方法，增加请求列表数据成功后的回调方法

* 2020年10月26日：
增加toggleRowSelection和clearSelection方法

* 2020年10月22日：
修复合并配置的包引用错误的问题
修复不能全局注入axiosRequester的问题
修复全局注入配置值为false时的错误

* 2020年10月21日：
增加可全局配置props的方法
版本号升至1.1.0

* 2020年10月10日：
当最后一页只有一条数据时，回退一页

* 2020年10月9日：
增加确认按钮锁定状态

* 2020年9月24日：
修改组件name为ManageTable

* 2020年9月23日：
增加dialog append to body 选项

* 2020年9月22日：
fix: 调整选框宽度，防止省略
增加序号列
序号列序号调整，修复翻页序号归零

* 2020年9月10日：
新增各操作请求方法定义
改变重新载入url的位置
请求成功后才关闭弹窗， 新建请求完成后重新刷新表格

* 2020年9月8日：
新增是否边框表格属性
修复是否边框表格属性类型错误

* 2020年9月7日：
新增是否斑马纹表格
新增排序功能
新增筛选功能
删除引入默认主题，防止样式出错


* 2020年8月26日：
加入是否使用列表勾选框属性table-selection
修复默认editSuccess动作
新增完成后重置表单
新增控制翻页器在单页时是否隐藏的控制属性

* 2020年8月14日：
请求时加入额外的参数做条件过滤
修复extraParams参数变化的bug

* 2020年8月8日：
支持函数返回动态列定义
修复编辑表单动态变化时，key值错误的问题

* 2020年8月7日：
为render组件增加name属性
fix: 表单条目增加prop属性，方便验证

* 2020年8月6日：
顶部搜索模板为空时不占位
完成输入组件的配置式渲染写法

* 2020年8月4日：
增加导出index.js

