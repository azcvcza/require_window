require(['tabview','treeview'],function(tab,tree){
    var tabView = new tab.TabView;
    var treeView = new tree.TreeView;
    console.log(tabView.name);
    console.log(treeView.name);
    console.log(tabView.animate.name)
})