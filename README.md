For Developers
============
You can also see [Cython](https://github.com/starlangsoftware/Util-Cy), [Java](https://github.com/starlangsoftware/Util), 
[C++](https://github.com/starlangsoftware/Util-CPP), [Swift](https://github.com/starlangsoftware/Util-Swift), [C](https://github.com/starlangsoftware/Util-C), [Python](https://github.com/starlangsoftware/Util-Py), or [C#](https://github.com/starlangsoftware/Util-CS) repository.

## Requirements

* [Node.js 14 or higher](#Node.js)
* [Git](#git)

### Node.js 

To check if you have a compatible version of Node.js installed, use the following command:

    node -v
    
You can find the latest version of Node.js [here](https://nodejs.org/en/download/).

### Git

Install the [latest version of Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Npm Install

	npm install nlptoolkit-util
	
## Download Code

In order to work on code, create a fork from GitHub page. 
Use Git for cloning the code to your local or below line for Ubuntu:

	git clone <your-fork-git-link>

A directory called util will be created. Or you can use below link for exploring the code:

	git clone https://github.com/starlangsoftware/util-js.git

## Open project with Webstorm IDE

Steps for opening the cloned project:

* Start IDE
* Select **File | Open** from main menu
* Choose `Util-Js` file
* Select open as project option
* Couple of seconds, dependencies will be downloaded. 

Detailed Description
============

+ [Interval](#interval)
+ [Subset](#subset)
+ [SubsetFromList](#subsetfromlist)
+ [Permutation](#permutation)

## Interval 

Aralık veri yapısını tutmak için Interval sınıfı

	a = Interval()

1 ve 4 aralığı eklemek için

	a.add(1, 4)

i. aralığın başını getirmek için (yukarıdaki örnekteki 1 gibi)

	getFirst(index: number):number

i. aralığın sonunu getirmek için (yukarıdaki örnekteki 4 gibi)

	getLast(index: number):number

## Subset 

Altküme tanımlamak ve tüm altkümelere ulaşmak için Subset ve SubsetFromList sınıfları

Subset veri yapısını tanımlamak için

	Subset(rangeStart: number, rangeEnd: number, elementCount: number)

Burada elemenCount elemanlı, elemanları rangeStart ile rangeEnd arasında değerler alabilen
tüm altkümeleri gezen bir yapıdan bahsediyoruz. Örneğin

Subset(1, 4, 2), bize iki elemanlı elemanlarını 1 ile 4 arasından gelen tüm alt kümeleri 
seçmek için kullanılan bir constructor'dır. Tüm altkümeleri elde etmek için

	a = Subset(1, 4, 2);
	subset = a.get()
	while (a.next()){
		subset = a.get()
		....

Burada subset sırasıyla {1, 2}, {1, 3}, {1, 4}, {2, 3}, {2, 4}, {3, 4} altkümelerini gezer. 

## SubsetFromList 

Altküme tanımlamak ve tüm altkümelere ulaşmak için Subset ve SubsetFromList sınıfları

SubsetFromList veri yapısını kullanmak için

	SubsetFromList(list: Array<number>, elementCount: number)

Burada elementCount elemanlı, elemanları list dizisinden çekilen değerler olan ve tüm 
altkümeleri gezen bir yapıdan bahsediyoruz. Örneğin

SubsetFromList([1, 2, 3, 4], 3), bize üç elemanlı elemanlarını [1, 2, 3, 4] listesinden 
seçen ve tüm alt kümeleri gezmekte kullanılan bir constructor'dır. Tüm altkümeleri elde 
etmek için

	a = SubsetFromList([1, 2, 3, 4], 3)
	subset = a.get()
	while (a.next()){
		subset = a.get()
		....

Burada SubsetFromList sırasıyla {1, 2, 3}, {1, 2, 4}, {1, 3, 4}, {2, 3, 4} altkümelerini 
gezer. 

## Permutation

Permütasyon tanımlamak ve tüm permütasyonlara ulaşmak için Permutation sınıfı

	Permutation(n: number)

Burada 0 ile n - 1 arasındaki değerlerin tüm olası n'li permütasyonlarını gezen bir 
yapıdan bahsediyoruz. Örneğin

Permutation(5), bize değerleri 0 ile 4 arasında olan tüm 5'li permütasyonları gezmekte 
kullanılan bir constructor'dır. Tüm permütasyonları elde etmek için

	a = Permutation(5)
	permutation = a.get()
	while (a.next()){
		permutation = a.get();
		...

Burada Permutation sırasıyla {0, 1, 2, 3, 4}, {0, 1, 2, 4, 3} gibi permütasyonları gezer.
