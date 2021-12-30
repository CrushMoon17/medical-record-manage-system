# 杭州仁爱医院病历管理系统

### 1.项目设计

#### （1）项目总体构成

本项目为病历管理系统，采用NodeJS+MongoDB+Express等技术。

本系统使用Bootstrap、Vue前端框架，其中包含：Vue-resource以及Vue-Router

Vue-resource:是一个通过XMLHttpRequrest或JSONP技术实现异步加载服务端数据的Vue插件

提供了一般的 HTTP请求接口和RESTful架构请求接口，并且提供了全局方法和VUe组件实例方法。

Vue-Router：是Vue.js官方的路由管理器

#### （2）引入的包在项目中的作用相关说明



#### （3）项目目录结构和各个部分的说明。

1、public目录： 项目公共目录，存放静态资源(img、js、css)和公共资源，404错误提示页面；

2、routor目录： 路由控制器目录，存放路由文件，将所有的业务逻辑都都写在这里；

3、views目录：  视图/模版目录，存放HTML模板文件；

4、module目录： 自己写的一些模块；

5、node_modules：存放所有的项目依赖库，配置package.json之后执行npm install后自动创建的文件夹；

6、app.js： 项目入口文件，程序初始运行文件；

7、package.json ：项目配置信息，依赖模块的定义

### 2.使用说明书

本系统为杭州市仁爱医院病历管理系统，系统功能有：注册（注册为管理员）、登陆、添加医生信息、添加病人信息、查询医生或病人信息、编辑或删除病历、登出等功能

#### （1）注册：输入帐号、密码，注册为管理员

![image-20211230014036342](/home/osuser/.config/Typora/typora-user-images/image-20211230014036342.png)

#### （2）管理员登陆：管理员输入帐号密码，点击登陆

![image-20211230015103102](/home/osuser/.config/Typora/typora-user-images/image-20211230015103102.png)

#### 管理员进入系统：可以查看医生信息、病人信息、医患比例及患者性别比例，可以添加医生、添加病人

![image-20211230015231540](/home/osuser/.config/Typora/typora-user-images/image-20211230015231540.png)

#### （3）管理员添加医生：管理员将本院医生信息添加到系统，本院医生即可用自己的工号及密码登陆系统

![image-20211230015735608](/home/osuser/.config/Typora/typora-user-images/image-20211230015735608.png)

#### 医生信息表

![image-20211230015916440](/home/osuser/.config/Typora/typora-user-images/image-20211230015916440.png)

#### （4）医生登陆：

![image-20211230020525340](/home/osuser/.config/Typora/typora-user-images/image-20211230020525340.png)

#### 医生进入系统：可查看病人信息、患者性别比例以及各科病人比例，添加病历

![image-20211230020601317](/home/osuser/.config/Typora/typora-user-images/image-20211230020601317.png)

#### （5）添加病历：管理员和医生都可添加病历

![image-20211230021242270](/home/osuser/.config/Typora/typora-user-images/image-20211230021242270.png)

#### 添加后病人信息

![image-20211230021331153](/home/osuser/.config/Typora/typora-user-images/image-20211230021331153.png)

#### （6）信息编辑：可以修改或删除患者信息

![image-20211230021630664](/home/osuser/.config/Typora/typora-user-images/image-20211230021630664.png)

#### 更改后的信息

![image-20211230021657459](/home/osuser/.config/Typora/typora-user-images/image-20211230021657459.png)

#### 删除信息

![image-20211230021830434](/home/osuser/.config/Typora/typora-user-images/image-20211230021830434.png)

#### 点击查看病历可以编辑患者过往病史

![image-20211230022242939](/home/osuser/.config/Typora/typora-user-images/image-20211230022242939.png)



![image-20211230022330771](/home/osuser/.config/Typora/typora-user-images/image-20211230022330771.png)

#### （7）患者信息查询：输入患者身份证号即可查询

![image-20211230022010533](/home/osuser/.config/Typora/typora-user-images/image-20211230022010533.png)

#### 软件架构

软件架构说明


#### 安装教程

1.  xxxx
2.  xxxx
3.  xxxx

#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx

#### 

