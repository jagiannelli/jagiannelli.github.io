var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "about-the-author",
  "level": "1",
  "url": "about-the-author.html",
  "type": "Author Biography",
  "number": "",
  "title": "About John A Giannelli",
  "body": " About John A Giannelli  Freelance IT Professional currently working for BSkyB, Livingston, Scotland.  He also likes to keep up with developments in modern Physic partly in an attempt to slow down brain degradation post the half century land mark!  He is currently learning Sage Math and has stumbled across the fantastic lectures of Gilbert Strang and the Mathbook XML of Robert Beezer.  "
},
{
  "id": "dedication",
  "level": "1",
  "url": "dedication.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": "  To my children  They are a constant reminder of what it is all about.   In Memory of Jack.  "
},
{
  "id": "acknowledgements",
  "level": "1",
  "url": "acknowledgements.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " I would like to acknowledge the following people from whom I may have stolen some material.   Gilbert Strang, MIT  Robert Beezer, University of Puget Sound  (The Late) James Stewart, McMaster University   "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " I have a degree in Physics from many years ago and have recently taken to refreshing my knowledge and bring it up to date with recent developments. This is exactly what Leonard Susskind 's is trying to help people like me with his fine set Theoretical Minimum material. Each step of the way I have had to go further and further back into my past studies - almost back to high school! On refreshing my maths knowledge I came across the fantastic series of Linear Algebra lectures given by Gilbert Strang at MIT. These lectures are hosted at MITOPENCOURSEWARE Linear Algebra  My aim is to eventually have refreshed my maths to such an extent that I can get past the first couple of chapters of Quantum Field Theory For the Gifted Amateur . This is not happening very quickly but with all this wonderful material available for free I am slowly getting there!  This notebook is an online repository of some Sage Math techniques I have come across in the above pursuits. It is at a very rudimentary level and is far from organised. Over time it may become more coherent and be useful to others.  Another motivating factor is that my daughter, Anna, has just embarked on a four year Maths and Biology Degree at Edinburgh University . I'm hoping that this manual may provide here with some useful material to make here learning experience more fruitful.  The format of this book is taken from Robert Beezer's wonderful work with MathBook XML .  Sage ( sagemath.org ) is a free, open source, software system for advanced mathematics, which is ideal for assisting with a study of abstract algebra. Sage can be used either on your own computer, a local server, or online through CoCalc .   John A Giannelli  Linlithgow, Scotland 2017   "
},
{
  "id": "sage-introduction",
  "level": "1",
  "url": "sage-introduction.html",
  "type": "Section",
  "number": "1.1",
  "title": "What Is SageMath?",
  "body": " What Is SageMath?  Sage is a powerful open-source mathematics system, built with the goal of being a viable alternative to Magma, Mathematica, Maple, and Matlab. Rather than reinventing everything, it binds together close to a hundred established open-source packages among them NumPy, SciPy, matplotlib, SymPy, Maxima, GAP, PARI\/GP and Singular behind a single Python-based language. In this opening chapter we look at how to get up and running with it.  There are three approaches worth knowing about:    Running Sage online, with nothing installed.    Installing Sage locally, which this chapter does with conda-forge.    Embedding Sage cells in your own web documents which is exactly what the rest of this book does.    It would be pointless here to try to replicate the extensive guides and tutorials on the SageMath documentation site. My aim is more limited. This is a dumping ground and practice area for things I have encountered while working my way through several online training materials. It also lets me practice using PreTeXt .  "
},
{
  "id": "sage-online",
  "level": "1",
  "url": "sage-online.html",
  "type": "Section",
  "number": "1.2",
  "title": "SageMath Online",
  "body": " SageMath Online  The quickest way to try Sage is not to install it at all.   SageMathCell is a public evaluation server: you type Sage into a box on a web page, press Evaluate , and the computation runs on the Sage project's own machines. There is nothing to install and no account to create. It is also the mechanism behind every executable cell in this book when you press Evaluate on a later page, that is where the work happens. Because it is a shared public service, a cell can take ten or twenty seconds to answer, particularly one that draws a plot. That is latency, not failure.  For anything longer-lived than a single cell there is CoCalc , the successor to what was once called the SageMath Cloud. It gives you persistent projects, Jupyter notebooks, a terminal and collaborative editing in the browser. A free account is enough to follow this book, though free projects have no internet access from inside them and are given modest resources.  A useful habit in either environment: putting %display latex at the top of a cell renders results as typeset mathematics rather than plain text, which makes matrix and symbolic output very much easier to read.  It is worth knowing how far that setting reaches. The Sage cells on a single page of this book share one session which is why a later cell can use a function an earlier one defined. %display latex lives in that session rather than in the cell you typed it into, so setting it once, in the first cell you evaluate on a page, governs every evaluation that follows on that page. Reloading the page starts a fresh session and the setting is gone. If output that was typeset a moment ago comes back as plain text, a reload is usually the reason.  "
},
{
  "id": "sage-install",
  "level": "1",
  "url": "sage-install.html",
  "type": "Section",
  "number": "1.3",
  "title": "Installing SageMath Locally",
  "body": " Installing SageMath Locally   Sooner or later you will want Sage on your own machine to work offline, to use your own files, or simply to have the full resources of the computer in front of you.  Historically this meant building Sage from source, a compile measured in hours whose instructions filled the rest of this chapter. That is no longer the recommended path and is no longer described here. Sage is now packaged for conda-forge , which ships pre-built binaries; installation is a download rather than a build.  The instructions below are for Linux and macOS. On Windows, install the Windows Subsystem for Linux and follow the Linux instructions inside it. The authoritative and up-to-date version of all of this is the SageMath installation guide ; what follows is the short path that works.    Installing with conda-forge  You need a conda distribution first. Miniforge is the natural choice, because it is configured to use conda-forge and nothing else; Miniconda works too, provided you are deliberate about the channel. Install one of those, then create an environment that holds Sage and nothing else:   conda create -n sage -c conda-forge sage   Keeping Sage in its own environment matters more than it might appear. Sage pins a great many packages to versions it has been tested against, so installing it beside an existing scientific Python stack is a reliable way to spend an afternoon reading solver output. Give it its own environment and the question never arises.  Expect a sizeable install: the environment is around 390 packages, about 1.4 GB to download and roughly 8 GB of disk once unpacked, because Sage brings its whole ecosystem GAP, PARI, Singular, Maxima, R and more along with it. The time this takes is dominated by your connection rather than your processor; on a fast link the whole thing finished in under three minutes, where the old source build was measured in hours. Activate the environment when it finishes:   conda activate sage  sage --version   That prints the bare version number, 10.9 or whatever is current when you read this. If it does, you are done. Starting Sage itself gives you rather more the banner names the Sage version, its release date and the Python underneath it, which is the quickest way to confirm what you are actually running.    Running Sage from the command line  With the environment active, sage on its own starts the interactive REPL. This is the quickest way in for a one-off calculation or a quick test.   sage     A sample Sage command line session.   Note the sage: prompt. The Sage REPL is IPython with Sage's own preparser in front of it, which is why 2**10 and 2^10 both mean exponentiation here, and why f(x) = x**2 defines a symbolic function. Those are Sage conventions, not Python ones, and they will not work in a plain Python interpreter.  To run a script rather than work interactively, hand the file to Sage:   sage myscript.sage   One difference will catch you out. The interactive prompt defines the symbolic variable x for you before you type anything; a script file does not. A script whose first line is integrate(sin(x)*x, x) fails with NameError: name 'x' is not defined , even though the identical line works in the REPL. Declare what you intend to use and the difference goes away:   x = var('x') integrate(sin(x)*x, x) f(x) = x**2   This is a good habit in any case: a script that declares its variables says what it means, and will still say it when the defaults change again.    Running Sage in a Jupyter notebook  The old Sage Notebook the sagenb server that once ran at localhost:8080  has been retired. Sage now uses Jupyter, and ships a kernel for it:   sage --notebook=jupyterlab   That opens JupyterLab in your browser. Its Launcher offers a tile per available kernel; choose SageMath rather than Python 3 , or you will get a plain Python notebook in which none of Sage's syntax works.    The JupyterLab Launcher, offering a SageMath kernel alongside Python 3.   The shorter sage -n jupyter also works, but it opens the older, plainer Notebook interface rather than JupyterLab  -n is an abbreviation for --notebook=default , and the default is not Lab. Either is fine; they run the same kernel. What you get is an online session's convenience with the whole of your own machine behind it, and your own files to hand.   "
},
{
  "id": "sage-command-line-4",
  "level": "2",
  "url": "sage-install.html#sage-command-line-4",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": "  A sample Sage command line session.  "
},
{
  "id": "sage-jupyter-5",
  "level": "2",
  "url": "sage-install.html#sage-jupyter-5",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": "  The JupyterLab Launcher, offering a SageMath kernel alongside Python 3.  "
},
{
  "id": "basics-introduction",
  "level": "1",
  "url": "basics-introduction.html",
  "type": "Section",
  "number": "2.1",
  "title": "What’s in This Chapter",
  "body": " What's in This Chapter  Here you will find a hotch potch of some basic SageMath concepts  "
},
{
  "id": "sage-executing-commands",
  "level": "1",
  "url": "sage-executing-commands.html",
  "type": "Section",
  "number": "2.2",
  "title": "Executing Sage Commands",
  "body": " Executing Sage Commands  Most of your interaction will be by typing commands into a sage cell . Just below this paragraph is an empty cell. Click once inside the compute cell and if you are in the Sage Notebook, you will get a more distinctive border around it, a blinking cursor inside, plus an evaluate link below.   At the cursor, type 2+2 and then click on the evaluate link. Did a 4 appear below the cell? If so, you have successfully sent a command off for Sage to evaluate and you have received back the (correct) answer.  Here is another compute cell. Try evaluating the command factorial(300) here.   "
},
{
  "id": "sage-defining-functions",
  "level": "1",
  "url": "sage-defining-functions.html",
  "type": "Section",
  "number": "2.3",
  "title": "How to define functions",
  "body": " How to define functions         "
},
{
  "id": "sage-symbolic-manipulation",
  "level": "1",
  "url": "sage-symbolic-manipulation.html",
  "type": "Section",
  "number": "2.4",
  "title": "Symbolic Manipulation",
  "body": " Symbolic Manipulation  Sage not only solves equations numerically but also allows for symbolic manipulation. The page will give several illustrative examples.  The expand method    Notice how the show() method displays the output in a nicer manner. Without it you will see the less pretty output: x^3 + 3*x^2 + 3*x + 1   Now the reverse! Perform a factor() on the expanded equation.   "
},
{
  "id": "sage-variables-plotting",
  "level": "1",
  "url": "sage-variables-plotting.html",
  "type": "Section",
  "number": "2.5",
  "title": "Declaring Variables and Plotting",
  "body": " Declaring Variables and Plotting   Sage allows us to solve equations symbolically . To make this possible we must define variables that are used in the symbolic manipulation.  We will demonstrate this using a complete differential equation example. Taking this approach has the additional advantage of introducing some other Sage features.  Don't worry if you have not yet covered differential equations in your studies. What follows is more to demonstrate SageMath capabilities rather than the maths. Come back here once you have solved some DE and it will then make more sense.    Use SageMath to solve differential equations  First we have to know how to describe a differential equation (DE) with Sage. The syntax may not be obvious but the are ample examples in the documentation.  Sage can solve a large class of first-order and second-order Ordinary Differential Equations (ODEs) as well as Initial Value Problems (IVPs). The chapter on differential equations will go into more details. This particular example just uses DE to illustrate how variables are declared and used.   For this first example, I'll express the differential equation using common mathematical notation, then enter it into Sage using Sage's notation. Here's the mathematical notation for our example:    This expression says that the unknown function (the function to be found) produces the sum of y(t) and r c y'(t) for any time t, and that the initial value of the function at time zero is 1. (The meaning of r and c will become clear after a bit.) This is an example of a differential equation that specifies an initial value, as many do. In this case I intend to scale the result after acquiring the result, and this initial value makes that easy. Here is how I submit this differential equation to Sage:    (From P Lutus - Applying Sage to physics )   Or in the prettier format:   Let us break this entry down:   var('r c t') tells Sage to pre-declare the variables that will be used.   tells Sage that is a function of , e.g. as though every time we type we mean . This is a way to identify as a function, not just a variable, and associate it with .   creates a variable that contains one of the statements of the DE.   invokes the Sage DE solver using our definition as an argument, and:   identifies as the function of interest and as the dependent variable   sets the initial conditions: at , or as we expressed it above, \" \".    Now let us plot this   Let us now take a more general solution.    "
},
{
  "id": "sage-and-python",
  "level": "1",
  "url": "sage-and-python.html",
  "type": "Section",
  "number": "2.6",
  "title": "Sage and Python",
  "body": " Sage and Python Python, Sage and   Sage is built on top of Python . It will do no harm to find out a little about this programming language and will aid your understanding of some of the examples used in this manual.    Lists, Tuples, and Dictionaries   Python has a number of built in data types. We will look at three that will come up again and again in this manual.    Lists Python Lists  Creating Lists Python Creating Lists    To create a list of items then use the [] operator filled with the items:     Creating an empty list and then adding items.   Notice that the items inside the list can be different types . In this cas a sting and a number .    Creating lists using python methods.   This is not a python tutorial so have a look here for more information on range() and append() .    Accessing items in a list  Python  Accessing Lists    Indexing and slicing lists .     Tuples  Python  Tuples    A tuple is an immutable list. A tuple can not be changed in once it is created.  Tuples are defined exactly like lists except by using () brackets rather than [] brackets.   Tuples are handy structures for thing like coordinates and are used extensively in the examples and exercises in this manual. For example, as co-ordinate ranges for plots. See for example the utility method plot_tangentline() .    Dictionaries (Associative Arrays)  Python  Dictionaries    Unlike lists, which are indexed by a numbers, dictionaries are indexed by keys, which can be any immutable type.  A dictionary is an unordered set of key : value pairs, with the requirement that the keys are unique (within the dictionary). A pair of braces creates an empty dictionary: {} . Placing a comma-separated list of key:value pairs within the braces adds initial key:value pairs to the dictionary.     "
},
{
  "id": "calculus-introduction",
  "level": "1",
  "url": "calculus-introduction.html",
  "type": "Section",
  "number": "3.1",
  "title": "Calculus in SageMath",
  "body": " Calculus in SageMath  SageMath has excellent functionality for Calculus. We will cover some of the basics here to give you some indication of what is possible.  "
},
{
  "id": "calculus-limits",
  "level": "1",
  "url": "calculus-limits.html",
  "type": "Section",
  "number": "3.2",
  "title": "Calculating Limits",
  "body": " Calculating Limits  The concept of the limit is often used to define the integral and the derivative of functions.  Here is an easy example to demonstrate Sage syntax for limits:   The following examples are taken from Essential Calculus - James Stewart .  See also the Sage Tutorial on Limits .  Example 2, page 26   Plotting this function will give us a better picture of what is happening:     Example 2, page 26   Sage Worked Examples Stewart : Section 1.3, Exercise 12, page 33 Stewart : Section 1.3, Exercise 12, page 33   From a plot or simplification of the equation you can visually see that there is an explosion at .   Note that we have used an exclude list (square brackets is a list) with one entry, namely . See what happens if you take this out. Also note that we have explicitly determined the upper and lower values. Again, experiment by taking these away or changing them.  Sage Worked Examples Stewart : Section 1.4, Exercise 14, page 44 Stewart : Section 1.4, Exercise 14, page 44   "
},
{
  "id": "calculus-limits-11",
  "level": "2",
  "url": "calculus-limits.html#calculus-limits-11",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": "  Example 2, page 26  "
},
{
  "id": "calculus-derivatives",
  "level": "1",
  "url": "calculus-derivatives.html",
  "type": "Section",
  "number": "3.3",
  "title": "Derivatives",
  "body": " Derivatives   Here are some basic examples to give a quick overview (without explanation) of how SageMath can be helpful for calculating derivatives:   The following examples are taken from Essential Calculus - James Stewart, Chapter 2 .    Examples From Chapter 2   Section 2.1  Sage Worked Examples Stewart : Section 2.1, Exercise 25 - 30, Page 82 Section 2.1, Exercise 25 - 30, Page 82   Sage Worked Examples Stewart : Section 2.1, Exercise 34, Page 82 Section 2.1, Exercise 34, Page 82   Sage Worked Examples Stewart : Section 2.1, Exercise 49, Page 83 Section 2.1, Exercise 49, Page 83   Sage Worked Examples Stewart : Section 2.1, Exercise 50, Page 83 Section 2.1, Exercise 50, Page 83     Section 2.2  Sage Worked Examples Stewart : Section 2.2, Exercise 44, Page 94 Section 2.2, Exercise 44, Page 94     Section 2.3  Sage Worked Examples Stewart : Section 2.3, Exercises 29, Page 105 Section 2.3, Exercises 29, Page 105   Sage Worked Examples Stewart : Section 2.3, Exercises 30, Page 105 Section 2.3, Exercises 30, Page 105     Section 2.4  Sage Worked Examples Stewart : Section 2.4, Exercises 27, Page 112 Section 2.4, Exercises 27, Page 112   We have performed the same action - plot a graph and its tangent line - several times now. Time to encapsulate it in our own function! Run the next sage cell example to define the function plot_tangentline .  This is a Python function that takes three arguments:  the function we want to plot.  the point on the function for which we want to draw the tangent line.  the range of x coordinates that we want the graph to span.    Running the next sage cell will not produce any visible results but will just stores this user defined method in memory for use in other cells. The next few examples make use of this user defined function to save a bit of typing.  Remember to run this before running any other Sage Cell that makes use of it.   User Defined Functions plot_tangentline  Utility method plot_tangentline()    Redo the previous example using our method:   Now wasn't that a lot easier! No for the rest.  Sage Worked Examples Stewart : Section 2.4, Exercises 28 - 31, Page 112 Section 2.4, Exercises 28 - 31, Page 112   Sage Worked Examples Stewart : Section 2.4, Exercise 36, Page 113 Section 2.4, Exercise 36, Page 113, Nth Derivative of a function  The second argument to the diff method is the derivative order: 1 for 1st derivative, 2 for second derivative, etc.   Sage Worked Examples Stewart : Section 2.4, Exercise 52, Page 114 Section 2.4, Exercise 52, Page 114  This demonstrates the use of some predefined names: omega and mu . These will get formatted to and when you use show() . Find out about LaTex to see what the other possibilities are, for example, xi for and Xi for uppercase , and so on.      Section 2.6 Implicit Differentiation  Sage Worked Examples Stewart : Section 2.6, Example 2 Section 2.6, Example 2 - The Folium Of Descartes   To plot this function we use the SageMath implicit_plot method.   Lets explore this function a bit more with SageMath. Some of this may not make anysense just now but will become clearer as course proceeds.   Now that we have familiarised our self with the shape of this equation lets now use sage to find the equation of the line at . Implicit differentiation is required here to compute so that we can find the gradient at this point.  Next find the horizontal axis of the curve by using the solve() passing in our expression and the partial derivative (set equal to zero - although this is assumed if we do not explicitly say so).  The solutions are printed using a for loop (learn some Python!) and an if statement that prints results only if and are real - in the 'ring' RR . There are two solutions, which we can see from the plot that this is correct. Take some time to understand the code used to do the plotting.   User Defined Functions point_with_coords  Utility method point_with_coords()     User Defined Functions cross_hair  Utility method cross_hair()     Sage Worked Examples Stewart : Section 2.6, Exercise 3, Page 127 Section 2.6, Exercise 3, Page 127   Summary  Differentiate the full equation with respect to . Use the chain rule for variable results in: Rearranging gives:  The remaining equations in this section will be solved without explanation.  The following examples make use of this predefined function. It is not very robust and assumes that the argumnet is sage Expression type with variable and .  Make sure you run this before running the other examples. There will be no output but the function will be stored in memory available for use in other cells.   User Defined Functions my_implicit_derivative  Utility method my_implicit_derivative()    Sage Worked Examples Stewart : Section 2.6, Exercise 4, Page 127 Section 2.6, Exercise 4, Page 127   Sage Worked Examples Stewart : Section 2.6, Exercise 5, Page 127 Section 2.6, Exercise 5, Page 127   Sage Worked Examples Stewart : Section 2.6, Exercise 6, Page 127 Section 2.6, Exercise 6, Page 127   Sage Worked Examples Stewart : Section 2.6, Exercise 7-16, Page 127 Section 2.6, Exercise 7 - 16, Page 127   Sage Worked Examples Stewart : Section 2.6, Exercise 19, Page 127 Section 2.6, Exercise 19, Page 127   Sage Worked Examples Stewart : Section 2.6, Exercise 20, Page 127 Section 2.6, Exercise 20, Page 127   Sage Worked Examples Stewart : Section 2.6, Exercise 21, Page 127 Section 2.6, Exercise 21 - Cardioid, Page 127   Sage Worked Examples Stewart : Section 2.6, Exercise 23, Page 127 Section 2.6, Exercise 23 - Lemniscate, Page 127    "
},
{
  "id": "plot_tangentline",
  "level": "2",
  "url": "calculus-derivatives.html#plot_tangentline",
  "type": "Definition",
  "number": "3.3.1",
  "title": "Utility method <code class=\"code-inline tex2jax_ignore\">plot_tangentline()<\/code>.",
  "body": " User Defined Functions plot_tangentline  Utility method plot_tangentline()   "
},
{
  "id": "point_with_coords",
  "level": "2",
  "url": "calculus-derivatives.html#point_with_coords",
  "type": "Definition",
  "number": "3.3.2",
  "title": "Utility method <code class=\"code-inline tex2jax_ignore\">point_with_coords()<\/code>.",
  "body": " User Defined Functions point_with_coords  Utility method point_with_coords()   "
},
{
  "id": "cross_hair",
  "level": "2",
  "url": "calculus-derivatives.html#cross_hair",
  "type": "Definition",
  "number": "3.3.3",
  "title": "Utility method <code class=\"code-inline tex2jax_ignore\">cross_hair()<\/code>.",
  "body": " User Defined Functions cross_hair  Utility method cross_hair()   "
},
{
  "id": "my_implicit_derivative",
  "level": "2",
  "url": "calculus-derivatives.html#my_implicit_derivative",
  "type": "Definition",
  "number": "3.3.4",
  "title": "Utility method <code class=\"code-inline tex2jax_ignore\">my_implicit_derivative()<\/code>.",
  "body": " User Defined Functions my_implicit_derivative  Utility method my_implicit_derivative()   "
},
{
  "id": "calculus-integration",
  "level": "1",
  "url": "calculus-integration.html",
  "type": "Section",
  "number": "3.4",
  "title": "Integration",
  "body": " Integration  Here are some examples of indefinite integrals to demonstrate the power of SageMath:   Now for some Definite Integrals. For example:   This can be confirmed in SageMath quite simply:   "
},
{
  "id": "integers-sage",
  "level": "1",
  "url": "integers-sage.html",
  "type": "Section",
  "number": "3.5",
  "title": "Sage",
  "body": " Sage   TBD   "
},
{
  "id": "cap-2017-hw2",
  "level": "1",
  "url": "cap-2017-hw2.html",
  "type": "Section",
  "number": "3.6",
  "title": "CAP 2017, HW 2 due January 31",
  "body": " CAP 2017, HW 2 due January 31   The Definition of a Derivative   The computation of the slope of a tangent line, the instantaneous rate of change of a function, at can be found from the following limit:   With a small adjustment in notation this limit can be rephrased.  The derivative of with respect to is the function and is defined as:      The Power Rule   If is a function such that , and is differentiable at , then, :      Linear Approximation   Given a twice continuously differentiable function of one real number variable, Taylor's theorem for the case states that: where is the remainder term. The linear approximation is obtained by dropping the remainder: . This is a good approximation for when it is close enough to ; since a curve, when closely observed, will begin to resemble a straight line. Therefore, the expression on the right-hand side is just the equation for the tangent line to the graph of at . For this reason, this process is also called the tangent line approximation .       From first principles find the derivative of    Both methods yield .    First Method:     Second Method:         Differentiate showing each step and stating which rules are used.                Use Linear Approximation to calculate .                Implicit Differentiation                 Implicit Differentiation           Implicit:   Explicit:   As you can see the results are the same for each method.  The problem that implicit differentiation solves is that it is often difficult or impossible to rearrange to have on the left by its own.     Implicit Differentiation of   Implicit Differentiation of   Exercise 2.1   Exercise 2.2   Exercise 2.3   Exercise 2.4   Exercise 2.5   Exercise 3.1   Exercise 3.2   Exercise 4     "
},
{
  "id": "definition-derivative",
  "level": "2",
  "url": "cap-2017-hw2.html#definition-derivative",
  "type": "Definition",
  "number": "3.6.1",
  "title": "The Definition of a Derivative.",
  "body": " The Definition of a Derivative   The computation of the slope of a tangent line, the instantaneous rate of change of a function, at can be found from the following limit:   With a small adjustment in notation this limit can be rephrased.  The derivative of with respect to is the function and is defined as:    "
},
{
  "id": "definition-derivative-power",
  "level": "2",
  "url": "cap-2017-hw2.html#definition-derivative-power",
  "type": "Definition",
  "number": "3.6.2",
  "title": "The Power Rule.",
  "body": " The Power Rule   If is a function such that , and is differentiable at , then, :    "
},
{
  "id": "definition-linear-approx",
  "level": "2",
  "url": "cap-2017-hw2.html#definition-linear-approx",
  "type": "Definition",
  "number": "3.6.3",
  "title": "Linear Approximation.",
  "body": " Linear Approximation   Given a twice continuously differentiable function of one real number variable, Taylor's theorem for the case states that: where is the remainder term. The linear approximation is obtained by dropping the remainder: . This is a good approximation for when it is close enough to ; since a curve, when closely observed, will begin to resemble a straight line. Therefore, the expression on the right-hand side is just the equation for the tangent line to the graph of at . For this reason, this process is also called the tangent line approximation .   "
},
{
  "id": "cap-2017-hw2-5-1",
  "level": "2",
  "url": "cap-2017-hw2.html#cap-2017-hw2-5-1",
  "type": "Exercise",
  "number": "3.6.1",
  "title": "",
  "body": "  From first principles find the derivative of    Both methods yield .    First Method:     Second Method:      "
},
{
  "id": "cap-2017-hw2-5-2",
  "level": "2",
  "url": "cap-2017-hw2.html#cap-2017-hw2-5-2",
  "type": "Exercise",
  "number": "3.6.2",
  "title": "",
  "body": "  Differentiate showing each step and stating which rules are used.             "
},
{
  "id": "cap-2017-hw2-5-3",
  "level": "2",
  "url": "cap-2017-hw2.html#cap-2017-hw2-5-3",
  "type": "Exercise",
  "number": "3.6.3",
  "title": "",
  "body": "  Use Linear Approximation to calculate .             "
},
{
  "id": "cap-2017-hw2-5-4",
  "level": "2",
  "url": "cap-2017-hw2.html#cap-2017-hw2-5-4",
  "type": "Exercise",
  "number": "3.6.4",
  "title": "",
  "body": "  Implicit Differentiation              "
},
{
  "id": "cap-2017-hw2-5-5",
  "level": "2",
  "url": "cap-2017-hw2.html#cap-2017-hw2-5-5",
  "type": "Exercise",
  "number": "3.6.5",
  "title": "",
  "body": "  Implicit Differentiation           Implicit:   Explicit:   As you can see the results are the same for each method.  The problem that implicit differentiation solves is that it is often difficult or impossible to rearrange to have on the left by its own.   "
},
{
  "id": "cap-2017-hw3",
  "level": "1",
  "url": "cap-2017-hw3.html",
  "type": "Section",
  "number": "3.7",
  "title": "CAP 2017, HW 3 due February 7",
  "body": " CAP 2017, HW 3 due February 7   Give complete explanations of what you are doing, written in full sentences. Solutions that have all the correct calculations and computations, but lack explanations, will not get full marks!    Rumour Spread and the Logistic Function  Under certain circumstances a rumour spreads according to the equation where is the proportion of the population that knows the rumor at time (in days) and and are positive constants.  Note that this is an example of the Logistic Function . When you get to differential equations this equation is quite important. Gilbert Strang gives a good presentation on this subject.  It is a very important equation and comes up often. See Logistic function (wiki)  The inverse function is an example of a Logit function (wiki) .    Find . What does this mean for the rumor?    After a long period of time everyone knows the rumour!          Find the rate of spread of the rumor.            Find the inverse function of and give an interpretation of the meaning.            Graph for the case and use your graph to estimate how long it will take for 80% of the population to hear the rumor. Can you also calculate this time?    days.  See Sage plot of below.    Use the inverse function with a value of    See Sage plot of inverse below.     Plot of .   From the sage plot we can see that the time to get to 80% is about days.  Plot of (the inverse of ).   From the sage calculation we can see that the time to get to 80% is days.      Radioactive Decay: Bismuth-210  Bismuth-210 has a half-life of 5.0 days.    A sample originally has a mass of . Find a formula for the mass remaining after days.   The mass (in ) after time (in days) is:     The rate of change of mass is proportional to the current mass: Lets call the constant of proportionality . The negative is because this is a decay.  The solution of this equation is: (where is the mass at .)  At the half-life and :      We are told that the half-life is days.   Substituting with the original mass gives us: where is the mass in and is the time in days.     Find the mass remaining after days.              When is the mass reduced to ?    days.          Sketch a graph of the mass function.    See Sage plot of mass function below.      Sketch of the mass function. (Note are easier for plots)       Second Derivatives and Taylor Series  If is continuous, show that:    The Definition of Taylor Series   Given a smooth function , we can always write down a Taylor series; there is no guarantee that the series converges to anything, let alone to the function. Given a smooth function , its Taylor series (around ) is A common mistake is to use instead of . Given a smooth function , its Taylor series expanded around is   The first few entries are       From first principles.   The first derivative is given by:   The solution is to apply this twice. The trick here is to start with the correct increments (see Math Stack Q&A ).         Using Taylor Series .    First set : TBD       The Mean Value Theorem  Suppose that for all values of , where is a function defined on all of the real numbers and differentiable everywhere. Show that     The Mean Value Theorem states that if is defined and continuous on the interval and differentiable on , then there is at least one number in the interval (that is ) such that            Brian M. Scott Second derivative “formula derivation” . Math StackExchange   Wiki Taylor Series.     "
},
{
  "id": "hw3-rumour-6-1",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-rumour-6-1",
  "type": "Exercise",
  "number": "3.7.1.a)",
  "title": "",
  "body": " Find . What does this mean for the rumor?    After a long period of time everyone knows the rumour!        "
},
{
  "id": "hw3-rumour-6-2",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-rumour-6-2",
  "type": "Exercise",
  "number": "3.7.1.b)",
  "title": "",
  "body": " Find the rate of spread of the rumor.          "
},
{
  "id": "hw3-rumour-6-3",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-rumour-6-3",
  "type": "Exercise",
  "number": "3.7.1.c)",
  "title": "",
  "body": " Find the inverse function of and give an interpretation of the meaning.          "
},
{
  "id": "hw3-rumour-6-4",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-rumour-6-4",
  "type": "Exercise",
  "number": "3.7.1.d)",
  "title": "",
  "body": " Graph for the case and use your graph to estimate how long it will take for 80% of the population to hear the rumor. Can you also calculate this time?    days.  See Sage plot of below.    Use the inverse function with a value of    See Sage plot of inverse below.   "
},
{
  "id": "hw3-decay-3-1",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-decay-3-1",
  "type": "Exercise",
  "number": "3.7.2.a)",
  "title": "",
  "body": " A sample originally has a mass of . Find a formula for the mass remaining after days.   The mass (in ) after time (in days) is:     The rate of change of mass is proportional to the current mass: Lets call the constant of proportionality . The negative is because this is a decay.  The solution of this equation is: (where is the mass at .)  At the half-life and :      We are told that the half-life is days.   Substituting with the original mass gives us: where is the mass in and is the time in days.   "
},
{
  "id": "hw3-decay-3-2",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-decay-3-2",
  "type": "Exercise",
  "number": "3.7.2.b)",
  "title": "",
  "body": " Find the mass remaining after days.            "
},
{
  "id": "hw3-decay-3-3",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-decay-3-3",
  "type": "Exercise",
  "number": "3.7.2.c)",
  "title": "",
  "body": " When is the mass reduced to ?    days.        "
},
{
  "id": "hw3-decay-3-4",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-decay-3-4",
  "type": "Exercise",
  "number": "3.7.2.d)",
  "title": "",
  "body": " Sketch a graph of the mass function.    See Sage plot of mass function below.    "
},
{
  "id": "definition-taylor-series",
  "level": "2",
  "url": "cap-2017-hw3.html#definition-taylor-series",
  "type": "Definition",
  "number": "3.7.1",
  "title": "The Definition of Taylor Series.",
  "body": " The Definition of Taylor Series   Given a smooth function , we can always write down a Taylor series; there is no guarantee that the series converges to anything, let alone to the function. Given a smooth function , its Taylor series (around ) is A common mistake is to use instead of . Given a smooth function , its Taylor series expanded around is   The first few entries are    "
},
{
  "id": "hw3-taylor-4-1",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-taylor-4-1",
  "type": "Exercise",
  "number": "3.7.3.a)",
  "title": "",
  "body": " From first principles.   The first derivative is given by:   The solution is to apply this twice. The trick here is to start with the correct increments (see Math Stack Q&A ).      "
},
{
  "id": "hw3-taylor-4-2",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-taylor-4-2",
  "type": "Exercise",
  "number": "3.7.3.b)",
  "title": "",
  "body": "  Using Taylor Series .    First set : TBD   "
},
{
  "id": "hw3-mvt-3-1",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-mvt-3-1",
  "type": "Exercise",
  "number": "3.7.4.a)",
  "title": "",
  "body": " The Mean Value Theorem states that if is defined and continuous on the interval and differentiable on , then there is at least one number in the interval (that is ) such that        "
},
{
  "id": "cap-2017-hw4",
  "level": "1",
  "url": "cap-2017-hw4.html",
  "type": "Section",
  "number": "3.8",
  "title": "CAP 2017, HW 4 due February 14",
  "body": " CAP 2017, HW 4 due February 14  Give complete explanations of what you are doing, written in full sentences. Solutions that have all the correct calculations and computations, but lack explanations, will not get full marks!  "
},
{
  "id": "calculus-references",
  "level": "1",
  "url": "calculus-references.html",
  "type": "References",
  "number": "3.9",
  "title": "References",
  "body": " References  Stuart, James Essential Calculus: Early Transcendentals . Second Edition, 2013. ISBN-13: 978-1133112280, ISBN-10: 1133112285 Amazon UK    Sage Calculus Tutorial - Limits    Sage Calculus Tutorial - Continuity    Sage Calculus Tutorial - One Sided Limits    Sage Calculus Tutorial - Limits At Infinity    Sage Calculus Tutorial - Slant Asymptotes   "
},
{
  "id": "first-order-de",
  "level": "1",
  "url": "first-order-de.html",
  "type": "Section",
  "number": "4.1",
  "title": "First Order Differential Equations",
  "body": " First Order Differential Equations   First Example   For this first example, we'll look at a simple problem so that we can concentrate on the SageMath commands without having to deal with the mathematical details.      The General Solution  First define as a function of    Next define our DE. Notice the ' == ' rather than the ' = ' when setting the RHS to zero. We are defining a Sage variable ' ' to hold the differential equation. The first ' = ' is to set the variable equal to our DE.   The derivative(y,x) is a Sage method that is passed a function , in this case . Of course, this has been defined above as . The derivative() method also takes one or more additional arguments for the equation variable, in this case .  This is a good point to talk about the Sage help facility.  Try the following:   This is a typical Docstring output detailing the signature (the required arguments) and details on how to use the method.  Notice that an alias for this method id diff . In other words an alias for derivative(y,x) would be diff(y,x) .  Now for the general solution. For this we use the desolve() method - d ifferential e quation solve . Try using ' desolve? ' to list the built in documentation.   This is the general solution as can be seen by the constant.  Let us now do two things: store the solution into a variable, and display the solution in a prettier format:        Initial Conditions  The initial condition for this equation is . That is, at .  From the Docstring for desolve() you can see :  \"ics\" - (optional) the initial or boundary conditions  for a first-order equation, specify the initial \"x\" and \"y\"    So let us try it. Notice the [0,1] for the [x,y] initial conditions.      Here we have again stored the solution to a variable sol_initial_con and used show() to pretty=print the output.    Plotting the Solution  Have a look at the Docstring for method plot() (plot?).  From this you can see that how to graph from and set the minimum y using :   Spend some time studying the other options.    Numerical Solution  In practice most DE ar not solvable analytically and we have to resort to numerical methods.  This is a good point to talk about the tab key and auto-completion.  Tab completion will not work in Sage Cells (what yo are using in this document) but only from a Sage Math Online sessions.   To illustrate, from an online workbook type desolve and press the tab key. All of the methods and actions that are possible to complete the method are displayed in a dop-down list. See the diagram below.    Tab completion from a Sage Cloud Session.   From the dropdown select the desolve_rk4 method. If required, now type '?' to display a description of this method.    These two solutions can be plotted together. As can be expected the operator acting on two plots will display them together.     Plotting the Vector Field  Let us re-write our original equation as:   There is a nice function plot_slope_field() that can be used to plot this equation over a range of and .  Previously we defined as a function. Here we have to redefine it as a variable.   If you plot this together with exact plot from above you can see that slope plot gives us a view of all the whole equation and not just a particular solution for a single set of initial conditions.      Second Example  This second example models the relationship between a continuous waveform and a dependent system. The differential equation looks like this:   For this equation there is no initial value setting because the system being modeled is continuous. This equation models natural systems that have a driving sinusoidal waveform. Here is the process for solving it:      Although this is correct it is not in the canonical format that is more recognizable. This class of DE is actually rather difficult to solve because initial values are assumed to exist, and it's difficult to specify the equation without any implicit or explicit initial values.  First, when the desolve() function does not get an explicit initial value specification as in this case, Sage automatically assigns a variable to represent it. In the result shown the initial value variable is . The variable assigned by desolve() is key to creating the desired equation.  Second, notice the appearance of the and terms in the result. These are present because the DE solver wrongly assumes that an initial value is present or needed. The secret to putting this equation into the desired form is to remove these exponential terms. What you need to do is set the constant C ( _C in the raw Sage response) to zero:         L'Hôpital's Rule  L'Hôpital's Rule   L'Hôpital's rule states that for functions and which are differentiable on an open interval except possibly at a point contained in , if   The differentiation of the numerator and denominator often simplifies the quotient or converts it to a limit that can be evaluated directly.     "
},
{
  "id": "first-order-de-2-6-6",
  "level": "2",
  "url": "first-order-de.html#first-order-de-2-6-6",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": "  Tab completion from a Sage Cloud Session.  "
},
{
  "id": "hospital",
  "level": "2",
  "url": "first-order-de.html#hospital",
  "type": "Principle",
  "number": "4.1.2",
  "title": "L’Hôpital’s Rule.",
  "body": " L'Hôpital's Rule  L'Hôpital's Rule   L'Hôpital's rule states that for functions and which are differentiable on an open interval except possibly at a point contained in , if   The differentiation of the numerator and denominator often simplifies the quotient or converts it to a limit that can be evaluated directly.   "
},
{
  "id": "second-order-de",
  "level": "1",
  "url": "second-order-de.html",
  "type": "Section",
  "number": "4.2",
  "title": "Second Order Differential Equations",
  "body": " Second Order Differential Equations   First Example   For this first example, we'll look at a harmonic oscillator problem with unit constants.   Initial conditions:      The General Solution  As before, we define and our DE. Notice the as the third argument to the diff() method. This tells the method to differentiate twice. We could have used diff(y,x,x) instead. Notice also we are using the alias diff for derivative .   Now obtain the general solution:   This is the general solution as can be seen by the constants.       Initial Conditions  From the Docstring for desolve we find that should be so let us try it.      Here we have again stored the solution to a variable sol_initial_con and used show() to pretty=print the output.  Try using some other initial conditions, for example,       As you can see these two particular solutions are instances of the general solution given above.    Symbolic Differential Equations  Let us now try and solve the same equation this time with a mass and spring constant .   Now we have to define additional variables for the two constants. It is also useful to add some constraints onto these variables. We do this using the assume() method:      Notice that we had to specify which of the variables is the independent variable using the ivar=x argument.    "
},
{
  "id": "system-of-de",
  "level": "1",
  "url": "system-of-de.html",
  "type": "Section",
  "number": "4.3",
  "title": "Systems Of Equations",
  "body": " Systems Of Equations   First Example  Let us look at the following pair of coupled first order differential equations:    Initial conditions:    You should now be comfortable with defining the variables, the functions, and the initial conditions. The only difference is the use of the desolve_system() method. So let us jump straight in:   Try this for fun:    A controlled explosion!   "
},
{
  "id": "exercises-de",
  "level": "1",
  "url": "exercises-de.html",
  "type": "Exercises",
  "number": "4.4",
  "title": "Exercises",
  "body": " Exercises    Response to Exponential Input  Consider the following differential equation:    This is the standard growth equation with an exponential forcing term .  We look for a particular solutions of the form:   where is a constant.  Substituting we get:   Rearranging gives:   Full solution is the particular solution plus null (or homogeneous ) solution:   From the initial conditions we get:   Substituting in gives:   Rearranging we can see the effect of the forcing in addition to the homogeneous term:   In Strang's terminology:   That is, the solution is a combination of the standard homogeneous term - the standard growth factor - plus an extra term coming from the forcing factor. Notice that this extra term has a singularity (division by zero) at . This is Resonance .  This singularity can be handled using L'Hopital's Rule    Gilbert Strang In Action   The full solution, using L'Hopital, should match the final solution in Strang's Lecture .   Now try and solve this using SageMath.    Remind yourself how to obtain the homogeneous (null) solution:  t,a = var('t,a') y = function('y')(t) de1 = diff(y,t) == a*y sol1 = desolve(de1,y, ivar=t) show(sol1)  and is the general solution to .  Also have a look at the screenshot above!    Sage Commands:  t, s, a, y0 = var ('t, s, a, y0') y = function('y')(t) de = diff(y,t) == a*y + e^(s*t) sol=desolve(de,y, ivar=t, ics=[0,y0]) show(sol)  This results in:   This is not quite the same format as Strang but it is easy to see that it is equivalent.  As mentioned above this solution can be taken further by using L'Hopital's Rule. We can circumvent the catastrophe by differentiating the numerator and denominator.  Sage Commands:  numerator = e^(s*t) - e^(a*t) numerator.diff(s) denominator= s - a denominator.diff(s)  This results in  Hence the full solution using L'Hopital now matches Strang's final solution:       Response to Oscillating Input  Consider the following differential equation:    This is the standard growth equation with a sinuosoidal input term .  We look for a particular solutions of the form:   where and are constants.  Now try and solve this using SageMath.    Sage Commands:  t, omega, a, y0 = var ('t, omega, a, y0') y = function('y')(t) de = diff(y,t) == a*y + cos(omega*t) sol=desolve(de,y, ivar=t, ics=[0,y0]) show(sol)  This results in:     "
},
{
  "id": "exercises-de-2",
  "level": "2",
  "url": "exercises-de.html#exercises-de-2",
  "type": "Exercise",
  "number": "4.4.1",
  "title": "",
  "body": "  Response to Exponential Input  Consider the following differential equation:    This is the standard growth equation with an exponential forcing term .  We look for a particular solutions of the form:   where is a constant.  Substituting we get:   Rearranging gives:   Full solution is the particular solution plus null (or homogeneous ) solution:   From the initial conditions we get:   Substituting in gives:   Rearranging we can see the effect of the forcing in addition to the homogeneous term:   In Strang's terminology:   That is, the solution is a combination of the standard homogeneous term - the standard growth factor - plus an extra term coming from the forcing factor. Notice that this extra term has a singularity (division by zero) at . This is Resonance .  This singularity can be handled using L'Hopital's Rule    Gilbert Strang In Action   The full solution, using L'Hopital, should match the final solution in Strang's Lecture .   Now try and solve this using SageMath.    Remind yourself how to obtain the homogeneous (null) solution:  t,a = var('t,a') y = function('y')(t) de1 = diff(y,t) == a*y sol1 = desolve(de1,y, ivar=t) show(sol1)  and is the general solution to .  Also have a look at the screenshot above!    Sage Commands:  t, s, a, y0 = var ('t, s, a, y0') y = function('y')(t) de = diff(y,t) == a*y + e^(s*t) sol=desolve(de,y, ivar=t, ics=[0,y0]) show(sol)  This results in:   This is not quite the same format as Strang but it is easy to see that it is equivalent.  As mentioned above this solution can be taken further by using L'Hopital's Rule. We can circumvent the catastrophe by differentiating the numerator and denominator.  Sage Commands:  numerator = e^(s*t) - e^(a*t) numerator.diff(s) denominator= s - a denominator.diff(s)  This results in  Hence the full solution using L'Hopital now matches Strang's final solution:    "
},
{
  "id": "exercises-de-3",
  "level": "2",
  "url": "exercises-de.html#exercises-de-3",
  "type": "Exercise",
  "number": "4.4.2",
  "title": "",
  "body": "  Response to Oscillating Input  Consider the following differential equation:    This is the standard growth equation with a sinuosoidal input term .  We look for a particular solutions of the form:   where and are constants.  Now try and solve this using SageMath.    Sage Commands:  t, omega, a, y0 = var ('t, omega, a, y0') y = function('y')(t) de = diff(y,t) == a*y + cos(omega*t) sol=desolve(de,y, ivar=t, ics=[0,y0]) show(sol)  This results in:    "
},
{
  "id": "differential-references",
  "level": "1",
  "url": "differential-references.html",
  "type": "References",
  "number": "4.5",
  "title": "References (places I plagiarized)",
  "body": " References (places I plagiarized)  Strang, Gilbert and Moler, Cleve Learn Differential Equations: Up Close with Gilbert Strang and Cleve Moler . RES.18-009 Fall 2015. Massachusetts Institute of Technology: MIT OpenCourseWare   Lutus, Paul Applying Sage To Physics - Differential Equations . Arachnoid - Mathematics - Sage    Dr Underwood's Physics YouTube page . Differential Equations in Sage - Part 1    Dr Underwood's Physics YouTube page . Differential Equations in Sage - Part 2   "
},
{
  "id": "linear-algebra-introduction",
  "level": "1",
  "url": "linear-algebra-introduction.html",
  "type": "Section",
  "number": "5.1",
  "title": "About This Exam",
  "body": " About This Exam  MATH08057: Introduction to Linear Algebra : December 2016  "
},
{
  "id": "linear-algebra-a1",
  "level": "1",
  "url": "linear-algebra-a1.html",
  "type": "Section",
  "number": "5.2",
  "title": "A1",
  "body": " A1   Linear Algebra Exam A1  Let be a linear transformation from which is a projection and suppose that Find the standard matrix of (The Projection Matrix).   [6 marks]    We will use the techniques detailed by Professor Strang in the lecture series 18.06 Linear Algebra Lecture 15: Projections onto subspaces     Diagram Of The Problem     Professor Strang In Action     Projection Matrix Formula   In these screenshots we can see that vector is the projection of vector onto .   is a multiple, , of : The error vector is given by: The other piece of information we require is that is perpendicular to . In other words, the dot product of these two vectors is zero. Recall that the dot product of two vectors is the same as the transpose of one with the other.  Combining the above gives us:    Since then:   From this we can see that the Projection Matrix, , is given by:   This matches the formula in the screenshot shown in figure above. In our exercise becomes .  Now lets see how we can solve this example using SageMath.  One of the most annoying points is that vectors are represented as rows. Usually, we prefer to write them in column form. However, we can switch the view by using the column() method on the vector.   The vector times the transpose of itself can be found by taking the outer_product() :   The dot product (inner product) given by is easily found by either of these two steps:   Combining these we get the complete solution for , what Strang calls as:   These concepts are combined with some fancy plotting methods to give us a nice visualisation of the problem:   Notice that the diagram is upside down compared with Strang's and that we multiplied by a factor of 2 so that we could more clearly see that lies on the same line as .  Let us now check some other properties of the projection matrix   "
},
{
  "id": "exam_a1",
  "level": "2",
  "url": "linear-algebra-a1.html#exam_a1",
  "type": "Example",
  "number": "5.2.1",
  "title": "",
  "body": " Linear Algebra Exam A1  Let be a linear transformation from which is a projection and suppose that Find the standard matrix of (The Projection Matrix).   [6 marks]   "
},
{
  "id": "linear-algebra-a1-4",
  "level": "2",
  "url": "linear-algebra-a1.html#linear-algebra-a1-4",
  "type": "Figure",
  "number": "5.2.2",
  "title": "",
  "body": "  Diagram Of The Problem  "
},
{
  "id": "linear-algebra-a1-5",
  "level": "2",
  "url": "linear-algebra-a1.html#linear-algebra-a1-5",
  "type": "Figure",
  "number": "5.2.3",
  "title": "",
  "body": "  Professor Strang In Action  "
},
{
  "id": "fig_projection_matrix",
  "level": "2",
  "url": "linear-algebra-a1.html#fig_projection_matrix",
  "type": "Figure",
  "number": "5.2.4",
  "title": "",
  "body": "  Projection Matrix Formula  "
},
{
  "id": "linear-algebra-a2",
  "level": "1",
  "url": "linear-algebra-a2.html",
  "type": "Section",
  "number": "5.3",
  "title": "A2",
  "body": " A2   Linear Algebra Exam A2  Let be a subspace of of dimension 2 and let be a fixed non-zero vector in .  Let denote the subset of consisting of all vectors of the form where is in the subspace .  For which vectors is also a subspace? Justify your answer.   [7 marks]    Before grappling this problem it helps to get a picture. I believe this is the best way to approach any problem. (Maybe this is just the old physicist in me). Sometimes it is not possible but not very often.  So lets first look at how SageMath can help us here. Since is a subspace then it must be a plane passing through the origin; subspaces must contain the vector and pass through the origin.  Take, for example, the plane passing through the origin given by:   Consider the case where our vector is the direction vector starting at position and extending to . This lies on the plane going through the origin and is our subspace .  Let the point be the start of and the point be the endpoint. These points are also the position vectors and and also lie on the plane (since the origin is on the plane). Hence, a normal to the plane is given by the cross-product:   (We could have taken the cross product of any of these three vectors since they are all in the same plane.)  We know that the dot product of the normal with any of our three vectors should be zero. This enables us to use implicit_plot3d() passing in an equation for any point on the plane. We have defined as the function to represent any point on this plane. In the sage cell this is achieved by the following technique: p = vector([x, y, z]) pA = a - p f(x,y,z) = n.dot_product(pA) The resultant function is: This confirms our initial equation above.  Now we have all we need to plot the plane. There are several ways of plotting this plane in SageMath. The one adopted here is to use implicit_plot3d() . We pass into this method the above function set equal to zero and the ranges. The next Sage Cell brings this together. Our vector is the yellow arrow, the origin is shown as the black dot in the centre, the plane is drawn in blue.  Now add another vector which is also on the same plane. This shown as the green arrow. To do this we introduce another point . You might wonder how we know that this point lies on our plane. It was found using the following trick. f=n[0]*x+n[1]*y+n[2]*z==0 show(f(x=-1,y=2)) Here is the -coordinate of the normal, is the -coordinate, and so on. They are the coefficients of the standard equation of a plane ( ). With is the plane case when the plane passes through the origin. The results are: From this, we can find the -coordinate of which ensure that the point fits onto our plane.  Now for the full picture. Lets find another vector that does not lie on our plane. Lets also form another plane which contains this new vector and vector (the yellow arrow).  Try the point .  Evaluating the following SageCell and playing with the resultant plot (zooming in and out and rotating) should convince you of the official Edinburgh University solution to the problem.      is a subspace if and only if .    If be a subspace of rank 2 then it is a plane through the origin. If then for direction vectors .  If and then and so is    Hence is also a plane through the origin.  If then which is a plane not through the origin, and so is not a subspace.  (This is hopefully illustrated with the Sage Cell simulation.)     "
},
{
  "id": "exam_a2",
  "level": "2",
  "url": "linear-algebra-a2.html#exam_a2",
  "type": "Example",
  "number": "5.3.1",
  "title": "",
  "body": " Linear Algebra Exam A2  Let be a subspace of of dimension 2 and let be a fixed non-zero vector in .  Let denote the subset of consisting of all vectors of the form where is in the subspace .  For which vectors is also a subspace? Justify your answer.   [7 marks]   "
},
{
  "id": "a2_solution-1",
  "level": "2",
  "url": "linear-algebra-a2.html#a2_solution-1",
  "type": "Proposition",
  "number": "5.3.2",
  "title": "",
  "body": "  is a subspace if and only if .    If be a subspace of rank 2 then it is a plane through the origin. If then for direction vectors .  If and then and so is    Hence is also a plane through the origin.  If then which is a plane not through the origin, and so is not a subspace.  (This is hopefully illustrated with the Sage Cell simulation.)   "
},
{
  "id": "linear-algebra-a3",
  "level": "1",
  "url": "linear-algebra-a3.html",
  "type": "Section",
  "number": "5.4",
  "title": "A3",
  "body": " A3   Linear Algebra Exam A3  Suppose that the non-zero vector is in . Show that is in or is in . Is the condition that necessary?   [7 marks]    "
},
{
  "id": "exam_a3",
  "level": "2",
  "url": "linear-algebra-a3.html#exam_a3",
  "type": "Example",
  "number": "5.4.1",
  "title": "",
  "body": " Linear Algebra Exam A3  Suppose that the non-zero vector is in . Show that is in or is in . Is the condition that necessary?   [7 marks]   "
},
{
  "id": "section-product-rule",
  "level": "1",
  "url": "section-product-rule.html",
  "type": "Section",
  "number": "5.5",
  "title": "The Product Rule",
  "body": " The Product Rule  The next rule we are going to explore is called the product rule of differentiation. We use this rule when there are two or more variable factors in the expression we are differentiating. (Remember, we already have the constant factor rule to deal with two factors when one of the two factors is a constant.)  Intuitively, what is happening in this rule is that we are alternately treating one factor as a constant (the one not being differentiated) and the other factor as a variable function (the one that is being differentiated). We then add these two rates of change together.  Ultimately, you want to perform this rule in your head just like all of the other rules. Your instructor, however, may initially want you to show steps; under that presumption, steps are going to be shown in each and every example of this lab when the product rule is applied. Two simple examples of the product rule are shown in .   Examples of the Product Rule      Given function  Derivative             A decision you'll need to make is how to handle a constant factor in a term that requires the product rule. Two options for taking the derivative of are shown in .     Option A    Option B      In Option B we are treating the factor of as a part of the first variable factor. In doing so, the factor of distributes itself. This is the preferred treatment of the author, so this is what you will see illustrated in this lab.     Find the first derivative formula for each of the following functions. In each case take the derivative with respect to the independent variable as implied by the expression on the right side of the equal sign. Make sure that you use the appropriate name for each derivative.                          Find each of the following derivatives without first simplifying the formula ; that is, go ahead and use the product rule on the expression as written. Simplify each resultant derivative formula. For each derivative, check your answer by simplifying the original expression and then taking the derivative of that simplified expression.                    "
},
{
  "id": "section-product-rule-2",
  "level": "2",
  "url": "section-product-rule.html#section-product-rule-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "product rule "
},
{
  "id": "table-product-rule",
  "level": "2",
  "url": "section-product-rule.html#table-product-rule",
  "type": "Table",
  "number": "5.5.1",
  "title": "Examples of the Product Rule",
  "body": " Examples of the Product Rule      Given function  Derivative            "
},
{
  "id": "figure-constant-factors-with-product-rule",
  "level": "2",
  "url": "section-product-rule.html#figure-constant-factors-with-product-rule",
  "type": "Figure",
  "number": "5.5.2",
  "title": "",
  "body": "   Option A    Option B     "
},
{
  "id": "section-product-rule-9-1-2",
  "level": "2",
  "url": "section-product-rule.html#section-product-rule-9-1-2",
  "type": "Exercise",
  "number": "5.5.1",
  "title": "",
  "body": "    "
},
{
  "id": "section-product-rule-9-1-3",
  "level": "2",
  "url": "section-product-rule.html#section-product-rule-9-1-3",
  "type": "Exercise",
  "number": "5.5.2",
  "title": "",
  "body": "    "
},
{
  "id": "section-product-rule-9-1-4",
  "level": "2",
  "url": "section-product-rule.html#section-product-rule-9-1-4",
  "type": "Exercise",
  "number": "5.5.3",
  "title": "",
  "body": "    "
},
{
  "id": "section-product-rule-9-1-5",
  "level": "2",
  "url": "section-product-rule.html#section-product-rule-9-1-5",
  "type": "Exercise",
  "number": "5.5.4",
  "title": "",
  "body": "    "
},
{
  "id": "unsimplified-product-first",
  "level": "2",
  "url": "section-product-rule.html#unsimplified-product-first",
  "type": "Exercise",
  "number": "5.5.5",
  "title": "",
  "body": "    "
},
{
  "id": "exercisegroup-unsimplified-product-3",
  "level": "2",
  "url": "section-product-rule.html#exercisegroup-unsimplified-product-3",
  "type": "Exercise",
  "number": "5.5.6",
  "title": "",
  "body": "    "
},
{
  "id": "unsimplified-product-last",
  "level": "2",
  "url": "section-product-rule.html#unsimplified-product-last",
  "type": "Exercise",
  "number": "5.5.7",
  "title": "",
  "body": "    "
},
{
  "id": "notation",
  "level": "1",
  "url": "notation.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation  The following table defines the notation used in this book. Page numbers or references refer to the first appearance of each symbol.   "
},
{
  "id": "solutions",
  "level": "1",
  "url": "solutions.html",
  "type": "Appendix",
  "number": "B",
  "title": "Hints and Solutions to Selected Exercises",
  "body": " Hints and Solutions to Selected Exercises  "
},
{
  "id": "appendix-gfdl",
  "level": "1",
  "url": "appendix-gfdl.html",
  "type": "Appendix",
  "number": "C",
  "title": "GNU Free Documentation License",
  "body": " GNU Free Documentation License   License Text  Version 1.3, 3 November 2008  Copyright copyright 2000, 2001, 2002, 2007, 2008 Free Software Foundation, Inc. < >  Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.    0. PREAMBLE  The purpose of this License is to make a manual, textbook, or other functional and useful document free in the sense of freedom: to assure everyone the effective freedom to copy and redistribute it, with or without modifying it, either commercially or noncommercially. Secondarily, this License preserves for the author and publisher a way to get credit for their work, while not being considered responsible for modifications made by others.  This License is a kind of copyleft , which means that derivative works of the document must themselves be free in the same sense. It complements the GNU General Public License, which is a copyleft license designed for free software.  We have designed this License in order to use it for manuals for free software, because free software needs free documentation: a free program should come with manuals providing the same freedoms that the software does. But this License is not limited to software manuals; it can be used for any textual work, regardless of subject matter or whether it is published as a printed book. We recommend this License principally for works whose purpose is instruction or reference.    1. APPLICABILITY AND DEFINITIONS  This License applies to any manual or other work, in any medium, that contains a notice placed by the copyright holder saying it can be distributed under the terms of this License. Such a notice grants a world-wide, royalty-free license, unlimited in duration, to use that work under the conditions stated herein. The Document , below, refers to any such manual or work. Any member of the public is a licensee, and is addressed as you . You accept the license if you copy, modify or distribute the work in a way requiring permission under copyright law.  A Modified Version of the Document means any work containing the Document or a portion of it, either copied verbatim, or with modifications and\/or translated into another language.  A Secondary Section is a named appendix or a front-matter section of the Document that deals exclusively with the relationship of the publishers or authors of the Document to the Document's overall subject (or to related matters) and contains nothing that could fall directly within that overall subject. (Thus, if the Document is in part a textbook of mathematics, a Secondary Section may not explain any mathematics.) The relationship could be a matter of historical connection with the subject or with related matters, or of legal, commercial, philosophical, ethical or political position regarding them.  The Invariant Sections are certain Secondary Sections whose titles are designated, as being those of Invariant Sections, in the notice that says that the Document is released under this License. If a section does not fit the above definition of Secondary then it is not allowed to be designated as Invariant. The Document may contain zero Invariant Sections. If the Document does not identify any Invariant Sections then there are none.  The Cover Texts are certain short passages of text that are listed, as Front-Cover Texts or Back-Cover Texts, in the notice that says that the Document is released under this License. A Front-Cover Text may be at most 5 words, and a Back-Cover Text may be at most 25 words.  A Transparent copy of the Document means a machine-readable copy, represented in a format whose specification is available to the general public, that is suitable for revising the document straightforwardly with generic text editors or (for images composed of pixels) generic paint programs or (for drawings) some widely available drawing editor, and that is suitable for input to text formatters or for automatic translation to a variety of formats suitable for input to text formatters. A copy made in an otherwise Transparent file format whose markup, or absence of markup, has been arranged to thwart or discourage subsequent modification by readers is not Transparent. An image format is not Transparent if used for any substantial amount of text. A copy that is not Transparent is called Opaque .  Examples of suitable formats for Transparent copies include plain ASCII without markup, Texinfo input format, LaTeX input format, SGML or XML using a publicly available DTD, and standard-conforming simple HTML, PostScript or PDF designed for human modification. Examples of transparent image formats include PNG, XCF and JPG. Opaque formats include proprietary formats that can be read and edited only by proprietary word processors, SGML or XML for which the DTD and\/or processing tools are not generally available, and the machine-generated HTML, PostScript or PDF produced by some word processors for output purposes only.  The Title Page means, for a printed book, the title page itself, plus such following pages as are needed to hold, legibly, the material this License requires to appear in the title page. For works in formats which do not have any title page as such, Title Page means the text near the most prominent appearance of the work's title, preceding the beginning of the body of the text.  The publisher means any person or entity that distributes copies of the Document to the public.  A section Entitled XYZ means a named subunit of the Document whose title either is precisely XYZ or contains XYZ in parentheses following text that translates XYZ in another language. (Here XYZ stands for a specific section name mentioned below, such as Acknowledgements , Dedications , Endorsements , or History .) To Preserve the Title of such a section when you modify the Document means that it remains a section Entitled XYZ according to this definition.  The Document may include Warranty Disclaimers next to the notice which states that this License applies to the Document. These Warranty Disclaimers are considered to be included by reference in this License, but only as regards disclaiming warranties: any other implication that these Warranty Disclaimers may have is void and has no effect on the meaning of this License.    2. VERBATIM COPYING  You may copy and distribute the Document in any medium, either commercially or noncommercially, provided that this License, the copyright notices, and the license notice saying this License applies to the Document are reproduced in all copies, and that you add no other conditions whatsoever to those of this License. You may not use technical measures to obstruct or control the reading or further copying of the copies you make or distribute. However, you may accept compensation in exchange for copies. If you distribute a large enough number of copies you must also follow the conditions in section 3.  You may also lend copies, under the same conditions stated above, and you may publicly display copies.    3. COPYING IN QUANTITY  If you publish printed copies (or copies in media that commonly have printed covers) of the Document, numbering more than 100, and the Document's license notice requires Cover Texts, you must enclose the copies in covers that carry, clearly and legibly, all these Cover Texts: Front-Cover Texts on the front cover, and Back-Cover Texts on the back cover. Both covers must also clearly and legibly identify you as the publisher of these copies. The front cover must present the full title with all words of the title equally prominent and visible. You may add other material on the covers in addition. Copying with changes limited to the covers, as long as they preserve the title of the Document and satisfy these conditions, can be treated as verbatim copying in other respects.  If the required texts for either cover are too voluminous to fit legibly, you should put the first ones listed (as many as fit reasonably) on the actual cover, and continue the rest onto adjacent pages.  If you publish or distribute Opaque copies of the Document numbering more than 100, you must either include a machine-readable Transparent copy along with each Opaque copy, or state in or with each Opaque copy a computer-network location from which the general network-using public has access to download using public-standard network protocols a complete Transparent copy of the Document, free of added material. If you use the latter option, you must take reasonably prudent steps, when you begin distribution of Opaque copies in quantity, to ensure that this Transparent copy will remain thus accessible at the stated location until at least one year after the last time you distribute an Opaque copy (directly or through your agents or retailers) of that edition to the public.  It is requested, but not required, that you contact the authors of the Document well before redistributing any large number of copies, to give them a chance to provide you with an updated version of the Document.    4. MODIFICATIONS  You may copy and distribute a Modified Version of the Document under the conditions of sections 2 and 3 above, provided that you release the Modified Version under precisely this License, with the Modified Version filling the role of the Document, thus licensing distribution and modification of the Modified Version to whoever possesses a copy of it. In addition, you must do these things in the Modified Version:   Use in the Title Page (and on the covers, if any) a title distinct from that of the Document, and from those of previous versions (which should, if there were any, be listed in the History section of the Document). You may use the same title as a previous version if the original publisher of that version gives permission.  List on the Title Page, as authors, one or more persons or entities responsible for authorship of the modifications in the Modified Version, together with at least five of the principal authors of the Document (all of its principal authors, if it has fewer than five), unless they release you from this requirement.  State on the Title page the name of the publisher of the Modified Version, as the publisher.  Preserve all the copyright notices of the Document.  Add an appropriate copyright notice for your modifications adjacent to the other copyright notices.  Include, immediately after the copyright notices, a license notice giving the public permission to use the Modified Version under the terms of this License, in the form shown in the Addendum below.  Preserve in that license notice the full lists of Invariant Sections and required Cover Texts given in the Document's license notice.  Include an unaltered copy of this License.  Preserve the section Entitled History , Preserve its Title, and add to it an item stating at least the title, year, new authors, and publisher of the Modified Version as given on the Title Page. If there is no section Entitled History in the Document, create one stating the title, year, authors, and publisher of the Document as given on its Title Page, then add an item describing the Modified Version as stated in the previous sentence.  Preserve the network location, if any, given in the Document for public access to a Transparent copy of the Document, and likewise the network locations given in the Document for previous versions it was based on. These may be placed in the History section. You may omit a network location for a work that was published at least four years before the Document itself, or if the original publisher of the version it refers to gives permission.  For any section Entitled Acknowledgements or Dedications , Preserve the Title of the section, and preserve in the section all the substance and tone of each of the contributor acknowledgements and\/or dedications given therein.  Preserve all the Invariant Sections of the Document, unaltered in their text and in their titles. Section numbers or the equivalent are not considered part of the section titles.  Delete any section Entitled Endorsements . Such a section may not be included in the Modified Version.  Do not retitle any existing section to be Entitled Endorsements or to conflict in title with any Invariant Section.  Preserve any Warranty Disclaimers.   If the Modified Version includes new front-matter sections or appendices that qualify as Secondary Sections and contain no material copied from the Document, you may at your option designate some or all of these sections as invariant. To do this, add their titles to the list of Invariant Sections in the Modified Version's license notice. These titles must be distinct from any other section titles.  You may add a section Entitled Endorsements , provided it contains nothing but endorsements of your Modified Version by various parties for example, statements of peer review or that the text has been approved by an organization as the authoritative definition of a standard.  You may add a passage of up to five words as a Front-Cover Text, and a passage of up to 25 words as a Back-Cover Text, to the end of the list of Cover Texts in the Modified Version. Only one passage of Front-Cover Text and one of Back-Cover Text may be added by (or through arrangements made by) any one entity. If the Document already includes a cover text for the same cover, previously added by you or by arrangement made by the same entity you are acting on behalf of, you may not add another; but you may replace the old one, on explicit permission from the previous publisher that added the old one.  The author(s) and publisher(s) of the Document do not by this License give permission to use their names for publicity for or to assert or imply endorsement of any Modified Version.    5. COMBINING DOCUMENTS  You may combine the Document with other documents released under this License, under the terms defined in section 4 above for modified versions, provided that you include in the combination all of the Invariant Sections of all of the original documents, unmodified, and list them all as Invariant Sections of your combined work in its license notice, and that you preserve all their Warranty Disclaimers.  The combined work need only contain one copy of this License, and multiple identical Invariant Sections may be replaced with a single copy. If there are multiple Invariant Sections with the same name but different contents, make the title of each such section unique by adding at the end of it, in parentheses, the name of the original author or publisher of that section if known, or else a unique number. Make the same adjustment to the section titles in the list of Invariant Sections in the license notice of the combined work.  In the combination, you must combine any sections Entitled History in the various original documents, forming one section Entitled History ; likewise combine any sections Entitled Acknowledgements , and any sections Entitled Dedications . You must delete all sections Entitled Endorsements .    6. COLLECTIONS OF DOCUMENTS  You may make a collection consisting of the Document and other documents released under this License, and replace the individual copies of this License in the various documents with a single copy that is included in the collection, provided that you follow the rules of this License for verbatim copying of each of the documents in all other respects.  You may extract a single document from such a collection, and distribute it individually under this License, provided you insert a copy of this License into the extracted document, and follow this License in all other respects regarding verbatim copying of that document.    7. AGGREGATION WITH INDEPENDENT WORKS  A compilation of the Document or its derivatives with other separate and independent documents or works, in or on a volume of a storage or distribution medium, is called an aggregate if the copyright resulting from the compilation is not used to limit the legal rights of the compilation's users beyond what the individual works permit. When the Document is included in an aggregate, this License does not apply to the other works in the aggregate which are not themselves derivative works of the Document.  If the Cover Text requirement of section 3 is applicable to these copies of the Document, then if the Document is less than one half of the entire aggregate, the Document's Cover Texts may be placed on covers that bracket the Document within the aggregate, or the electronic equivalent of covers if the Document is in electronic form. Otherwise they must appear on printed covers that bracket the whole aggregate.    8. TRANSLATION  Translation is considered a kind of modification, so you may distribute translations of the Document under the terms of section 4. Replacing Invariant Sections with translations requires special permission from their copyright holders, but you may include translations of some or all Invariant Sections in addition to the original versions of these Invariant Sections. You may include a translation of this License, and all the license notices in the Document, and any Warranty Disclaimers, provided that you also include the original English version of this License and the original versions of those notices and disclaimers. In case of a disagreement between the translation and the original version of this License or a notice or disclaimer, the original version will prevail.  If a section in the Document is Entitled Acknowledgements , Dedications , or History , the requirement (section 4) to Preserve its Title (section 1) will typically require changing the actual title.    9. TERMINATION  You may not copy, modify, sublicense, or distribute the Document except as expressly provided under this License. Any attempt otherwise to copy, modify, sublicense, or distribute it is void, and will automatically terminate your rights under this License.  However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.  Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.  Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, receipt of a copy of some or all of the same material does not give you any rights to use it.    10. FUTURE REVISIONS OF THIS LICENSE  The Free Software Foundation may publish new, revised versions of the GNU Free Documentation License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns. See .  Each version of the License is given a distinguishing version number. If the Document specifies that a particular numbered version of this License or any later version applies to it, you have the option of following the terms and conditions either of that specified version or of any later version that has been published (not as a draft) by the Free Software Foundation. If the Document does not specify a version number of this License, you may choose any version ever published (not as a draft) by the Free Software Foundation. If the Document specifies that a proxy can decide which future versions of this License can be used, that proxy's public statement of acceptance of a version permanently authorizes you to choose that version for the Document.    11. RELICENSING  Massive Multiauthor Collaboration Site (or MMC Site ) means any World Wide Web server that publishes copyrightable works and also provides prominent facilities for anybody to edit those works. A public wiki that anybody can edit is an example of such a server. A Massive Multiauthor Collaboration (or MMC ) contained in the site means any set of copyrightable works thus published on the MMC site.  CC-BY-SA means the Creative Commons Attribution-Share Alike 3.0 license published by Creative Commons Corporation, a not-for-profit corporation with a principal place of business in San Francisco, California, as well as future copyleft versions of that license published by that same organization.  Incorporate means to publish or republish a Document, in whole or in part, as part of another Document.  An MMC is eligible for relicensing if it is licensed under this License, and if all works that were first published under this License somewhere other than this MMC, and subsequently incorporated in whole or in part into the MMC, (1) had no cover texts or invariant sections, and (2) were thus incorporated prior to November 1, 2008.  The operator of an MMC Site may republish an MMC contained in the site under CC-BY-SA on the same site at any time before August 1, 2009, provided the MMC is eligible for relicensing.    ADDENDUM: How to use this License for your documents  To use this License in a document you have written, include a copy of the License in the document and put the following copyright and license notices just after the title page:  Copyright (C) YEAR YOUR NAME. Permission is granted to copy, distribute and\/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts. A copy of the license is included in the section entitled \"GNU Free Documentation License\".  If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts, replace the with Texts. line with this:  with the Invariant Sections being LIST THEIR TITLES, with the Front-Cover Texts being LIST, and with the Back-Cover Texts being LIST.  If you have Invariant Sections without Cover Texts, or some other combination of the three, merge those two alternatives to suit the situation.  If your document contains nontrivial examples of program code, we recommend releasing these examples in parallel under your choice of free software license, such as the GNU General Public License, to permit their use in free software.   "
},
{
  "id": "book-index",
  "level": "1",
  "url": "book-index.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": "  "
},
{
  "id": "colophon",
  "level": "1",
  "url": "colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in MathBook XML.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
