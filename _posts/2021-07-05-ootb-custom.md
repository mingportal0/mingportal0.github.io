---
title: "Windchill 화면에 버튼을 넣는 방법"
layout: post
date: 2021-07-07
categories: windchill
tags: [windchill]
comment: yes
---



### 제품의 테이블 위에 넣기

![image-20210707154036222](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210707154036222.png)

> WC_HOME\codebase\WEB-INF\jsp\folder\table.jsp

##### 직접 추가

```javascript
<div>
    <a>Search</a>
</div>
<div id="FolderPageRightPane">
    <mvc:table/>
</div>
```



### 제품의 프로퍼티패널에 넣기

![image-20210707154758671](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210707154758671.png)

> WC_HOME\codebase\WEB-INF\jsp\folder\folderDetailsBox.jsp

##### 스크립트 수정

```javascript
function addButton(parent){
    let btn = document.createElement("a");
	btn.innerText = "Search"	
	parent.parentNode.insertBefore(btn, parent.nextSibling);
}
   
let itemPanel = document.getElementById("undefinedinfoPageIdentityDisplayPanel");
addButton(itemPanel);
```



### 헤더패널에 넣기

![image-20210707154829378](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210707154829378.png)

> WC_HOME\codebase\netmarkets\javascript\util\windchill-all.js

##### 스크립트 수정

```javascript
//wgmIconBox 생성
var wgmIconBox = new Ext.BoxComponent({
    id: "wgmIconID",
    cls: "home_icon_header search_icon",
    listeners: {
        render: function() {
            var wgIconTooltip = new Ext.ToolTip({
                id: "wgmTooltip",
                target: "wgmIconID",
                html: "작업공간에 파트 넣기"
            });

            this.mon(this.getEl(), "click", function() {
                //클릭 시 이벤트
            })
        }
    }
});
...
var config = {
            id: PTC.navigation.contentTabID +
                "_breadcrumb",
            border: false,
            layout: "hbox",
            layoutConfig: {
                align: "middle"
            },
            margins: "8 0 6 6",
    		//wgmIconBox 넣기
            items: [homePageIconBox, breadcrumbPanel, ProjectStatusPanelComp, wgmIconBox, recentlyAccessedButton]
        };
		
        PTC.navigation.breadcrumb.HeaderPanel.superclass.constructor.call(this, config);
```

##### 필요하다면 css도 수정

> WC_HOME\codebase\netmarkets\themes\windchill\xtheme-windchill.css

```css
.search_icon {
    background-image: url(../../images/search.gif);
	background-repeat: no-repeat;
	width: 16px;
	height: 16px;
	margin: 0;
	border-radius: 5px;
 }
.search_icon:hover {
    background-color: #ffb65a;
 }
```



### 작업공간 테이블의 툴바에 넣기

![image-20210707154003504](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210707154003504.png)

> WC_HOME\codebase\netmarkets\jsp\ws\wsDetails.jsp

##### 방법1 : 스크립트 수정 (WorkGroupManager에서는 안나옴)

```javascript
function addButton(iframe){
	let toolbarTD = iframe.contentWindow.document.querySelectorAll(".x-toolbar-left-row")[2];
	let btn = document.createElement("a");
	btn.innerText = "Search"
	toolbarTD.append(btn);
}

let iframe = document.getElementById("the_tpIFrame");
iframe.src = iFrameSrc;
iframe.onload = function(){
	window.setTimeout(addButton(iframe), 1000);
}
```



##### 방법2 : 자바 소스 수정 (WorkGroupManager에서도 나옴)

![image-20210708105817808](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210708105817808.png)

wncWeb.jar에서 여러 파일을 수정해야 한다.

툴바버튼을 넣는 클래스는 아래와 같다.

> ptc/windchill/uwgm/cadx/ws/ExtWsToolbarTemplateProcessor.java

- 선택이 필요한 버튼 생성 메소드

  createSelectionBasedItemDescriptors(HTTPRequest var1, Locale var2)

- 선택이 필요없는 버튼 생성 메소드

  createNonSelectionBasedItemDescriptors(HTTPRequest var1, Locale var2)



위 두 메소드 모두 createWsToolBarItems(Properties var1, Object var2, Vector var3, Locale var4) 메소드를 사용해 버튼을 리스트를 생성하는데 여기서 중요한 부분이 Vector인 var3이다.

var3은 getNonMultSelURLActions(String var1, Object var2, Locale var3) 메소드에서 ActionDelegate Vector로 생성된다. 



> MselUrlLinkResource.java
>
> WorkspaceActionsUrlLinkResource.java 둘 중 택일

ActionDelegate를 만들기 전에 MselUrlLinkResource 또는 WorkspaceActionsUrlLinkResource에 CONTEXT_SERVICE_NAME을 추가한다.

```java
contents = new Object[][]{{"0", ":"}, {"1", ","},
				{"2", "NEWPART_JCA,NEWCADDOC_JCA," + RefreshWorkspaceActionDelegate.CONTEXT_SERVICE_NAME + "," + AddWorkspaceActionDelegate.CONTEXT_SERVICE_NAME}};
```



> AddWorkspaceActionDelegate.java

위에서 정한 CONTEXT_SERVICE_NAME으로 ActionDelegate  클래스를 만든다. (RefreshWorkspaceActionDelegate.java를 참고해 만듬.)

```java
public class AddWorkspaceActionDelegate extends BasicWildfireNavBarActionDelegate {
	private static final Log log = LogFactory.getLog(AddWorkspaceActionDelegate.class);
	public static String CONTEXT_SERVICE_NAME = "ADD_WS";

	public Boolean valid(Object var1) {
		return Boolean.TRUE;
	}

	@Override
	public String getContextServiceName() {
		return CONTEXT_SERVICE_NAME;
	}

	public Boolean enableable(Object var1, HTTPRequest var2) throws WTException {
		try {
			this.setIsValidInInActive(Boolean.FALSE);
			this.setNeverInStandAlone(Boolean.TRUE);
		} catch (Exception var4) {
			log.error("Error in enableable", var4);
		}

		return Boolean.TRUE;
	}
}
```



> AddWorkspaceURLActionDelegate.java

AddWorkspaceActionDelegate 클래스를 상속한 AddWorkspaceURLActionDelegate 클래스를 만든다. (RefreshWorkspaceURLActionDelegate.java를 참고해 만듬.)

```java
package com.ptc.windchill.uwgm.cadx.ws;

import com.ptc.windchill.cadx.common.WildfireNavBarCommonURLActionDelegate;
import com.ptc.windchill.cadx.common.commonResource;

import java.beans.PropertyChangeEvent;
import java.util.HashMap;
import java.util.Locale;
import wt.introspection.PropertyDisplayName;
import wt.templateutil.processor.HTTPState;
import wt.templateutil.processor.NavBarURLActionDelegateHelper;
import wt.util.WTException;
import wt.util.WTPropertyVetoException;

public class AddWorkspaceURLActionDelegate extends AddWorkspaceActionDelegate
		implements
			WildfireNavBarCommonURLActionDelegate {
	private String classURL = null;
	protected NavBarURLActionDelegateHelper helper = new NavBarURLActionDelegateHelper();

	public String URL(Object var1) throws WTException {
		String var2 = "javascript: addWorkSpace()";
		return var2;
	}

	public String URL(Object var1, HTTPState var2) throws WTException {
		String var3 = this.URL(var1);
		return var3;
	}

	public String getURLLabel(Locale var1) {
		if (this.helper.getResourceKey() == null) {
			this.helper.setResourceKey("59");
			this.helper.setResourceBundleStr(commonResource.class.getName());
			this.helper.setMethod("generateForm");
		}

		return this.helper.getURLLabel(var1);
	}

	public String getActionName() {
		return this.helper.getActionName();
	}

	public String getClassURL() {
		return this.classURL;
	}

	public void setClassURL(String var1) throws WTPropertyVetoException {
		this.classURLValidate(var1);
		this.classURL = var1;
	}

	private void classURLValidate(String var1) throws WTPropertyVetoException {
		if (var1 != null && var1.length() > 200) {
			Object[] var2 = new Object[]{new PropertyDisplayName(this.getClass().getName(), "classURL"), "200"};
			throw new WTPropertyVetoException("wt.introspection.introspectionResource", "20", var2,
					new PropertyChangeEvent(this, "classURL", this.classURL, var1));
		}
	}

	public boolean isURLProvider(HashMap var1, Object var2) {
		return this.helper.isURLProvider(var1, var2);
	}

	public void setResourceKey(String var1) {
		this.helper.setResourceKey(var1);
	}

	public void setResourceBundleStr(String var1) {
		this.helper.setResourceBundleStr(var1);
	}

	public void setMethod(String var1) {
		this.helper.setMethod(var1);
	}
}
```



> commonResource.java

위에서 사용한 commonResource의 키와 이름을 정해야 한다.

WC_HOME/codebase/com/ptc/windchill/cadx/common/commonResource.class

```java
@RBEntry("Add Parts In Workspace")
	public static final String ADD_WS_TOOLTIP = "59";
```



> commonResource_ko.java

한글 버전도 작성한다.

WC_HOME/codebase/com/ptc/windchill/cadx/common/commonResource_ko.class

```java
@RBEntry("작업공간에 파트 추가")
	public static final String ADD_WS_TOOLTIP = "59";
```



> cadx.properties

프로퍼티 파일도 수정한다.

WC_HOME/codebase/com/ptc/windchill/uwgm/cadx.properties 에서 다음과 같이 추가한다.

```properties
########################################################################################################
# Add Workspace
########################################################################################################
wt.services/svc/default/wt.enterprise.ActionDelegate/ADD_WS/java.lang.Object/0=com.ptc.windchill.uwgm.cadx.ws.AddWorkspaceActionDelegate/singleton
wt.services/svc/default/wt.enterprise.URLActionDelegate/ADD_WS/java.lang.Object/0=com.ptc.windchill.uwgm.cadx.ws.AddWorkspaceURLActionDelegate/singleton
wt.services/svc/default/wt.fc.IconDelegate/ADD_WS/java.lang.Object/0=wt.fc.ActionIconDelegate/duplicate
wt.services/svc/default/wt.fc.ActionIconDelegate/ADD_WS/java.lang.Object/0=netmarkets.images.search.gif
```



> wsTable.js

마지막으로 위에서 사용한 자바스크립트를 등록해주어야 한다.

WC_HOME\codebase\templates\uwgm\cadx\ws\wsTable.js 에 추가하면 되는데 안되는 경우도 있다.

(WC_HOME\codebase\netmarkets\javascript\util\windchill-all.js에 추가해도 된다.)

```javascript
/*
 * Add WorkSpace
 */
function addWorkSpace() {
    console.log("addWorkSpace");
}
```

