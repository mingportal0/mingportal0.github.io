---
title: "List Paging"
layout: post
date: 2021-03-24
categories: windchill
tags: [windchill]
comment: yes

---



### Paging

```
String sessionId = StringUtil.checkNull((String) reqMap.get("sessionId"));
	    
PagingQueryResult result = null;

if (sessionId.length() > 0) {
	result = PagingSessionHelper.fetchPagingSession(start, count, Long.valueOf(sessionId));
} else {
	CompoundQuerySpec query = distributeItemCommonQuery(reqMap, false);
	query.setAdvancedQueryEnabled(true);

	result = PageQueryBroker.openPagingSession(start, count, query, true);
}
```

