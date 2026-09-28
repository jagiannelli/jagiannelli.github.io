var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "about-the-author",
  "level": "1",
  "url": "about-the-author.html",
  "type": "Author Biography",
  "number": "",
  "title": "About John A Giannelli",
  "body": " About John A Giannelli  Retired IT professional who potters about in his campervan and doodles with AI, based in Linlithgow, Scotland.  He keeps up with developments in modern physics and is currently learning SageMath. Along the way he has discovered the excellent lectures of Gilbert Strang and PreTeXt (the successor to MathBook XML) by Robert Beezer, which integrates nicely with SageMath on CoCalc.  "
},
{
  "id": "dedication",
  "level": "1",
  "url": "dedication.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": "  To my children  They are a constant reminder of what it is all about.   In Memory of Jack (April 1987 - May 1997).  "
},
{
  "id": "acknowledgements",
  "level": "1",
  "url": "acknowledgements.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " I would like to acknowledge the following people from whom I may have stolen some material.     Gilbert Strang, MIT (Retired)    Robert Beezer, University of Puget Sound     (The Late) James Stewart, McMaster University      "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " I have a degree in Physics from many years ago and have been refreshing my knowledge and bringing it up to date with recent developments. This is exactly what Leonard Susskind is trying to help people like me with his fine set Theoretical Minimum material. Each step of the way I have had to go further and further back into my past studies - almost back to high school! On refreshing my maths knowledge I came across the fantastic series of Linear Algebra lectures given by Gilbert Strang at MIT. These lectures are hosted at MITOPENCOURSEWARE Linear Algebra   My aim is to eventually have refreshed my maths to such an extent that I can get past the first couple of chapters of Quantum Field Theory For the Gifted Amateur . This is not happening very quickly but with all this wonderful material available for free I am slowly getting there!  This notebook is an online repository of some Sage Math techniques I have come across in the above pursuits. It is at a very rudimentary level and is far from organised. Over time it may become more coherent and be useful to others.  The format of this book is taken from Robert Beezer's wonderful work with MathBook XML. The book has since been ported to PreTeXt , the more general successor to MathBook XML.  Sage ( sagemath.org ) is a free, open source software system for advanced mathematics, covering everything from algebra and calculus to linear algebra and differential equations. Sage can be used either on your own computer, a local server, or online through CoCalc .   John A Giannelli  Linlithgow, Scotland 2026   "
},
{
  "id": "sage-introduction",
  "level": "1",
  "url": "sage-introduction.html",
  "type": "Section",
  "number": "1.1",
  "title": "What Is SageMath?",
  "body": " What Is SageMath?  Sage is a powerful open-source mathematics system, built with the goal of being a viable alternative to Magma, Mathematica, Maple, and Matlab. Rather than reinventing everything, it binds together close to a hundred established open-source packages among them NumPy, SciPy, matplotlib, SymPy, Maxima, GAP, PARI\/GP and Singular behind a single Python-based language. In this opening chapter we look at how to get up and running with it.  There are three approaches worth knowing about:     Running Sage online, with nothing installed.    Installing Sage locally, which this chapter does with conda-forge.    Embedding Sage cells in your own web documents which is exactly what the rest of this book does.     It would be pointless here to try to replicate the extensive guides and tutorials on the SageMath documentation site. My aim is more limited. This is a practice area for things I have met while working through several online courses. It also lets me practice using PreTeXt .  "
},
{
  "id": "sage-online",
  "level": "1",
  "url": "sage-online.html",
  "type": "Section",
  "number": "1.2",
  "title": "SageMath Online",
  "body": " SageMath Online  The quickest way to try Sage is not to install it at all.   SageMathCell is a public evaluation server: you type Sage into a box on a web page, press Evaluate , and the computation runs on the Sage project's own machines. There is nothing to install and no account to create. It is also the mechanism behind every executable cell in this book when you press Evaluate on a later page, that is where the work happens. Because it is a shared public service, a cell can take ten or twenty seconds to answer, particularly one that draws a plot. That is latency, not failure.  For anything longer-lived than a single cell there is CoCalc , the successor to what was once called the SageMath Cloud. It gives you persistent projects, Jupyter notebooks, a terminal and collaborative editing in the browser. A free account is enough to follow this book, though free projects have no internet access from inside them and are given modest resources.   Getting a Sage notebook in CoCalc  Once you are signed in, three steps take you from nothing to a notebook that runs Sage. First, from the Projects page, create a project. Give it a title, choose the SageMath image, and press Create and Open .   Creating a CoCalc project with the SageMath image.  Create a Project dialog: title Sage Tutorial, SageMath image selected, Create and Open button.   The new project opens empty. Choose Notebook to create a Jupyter notebook. CoCalc suggests a filename, which you can accept or change.   A newly opened project, ready for its first notebook.  Empty CoCalc project file view, with the pointer over the Notebook (Jupyter) tile.   Finally, check the kernel. The kernel name is shown at the top left of the notebook, and clicking it opens the kernel panel. It should read SageMath . If it reads Python 3 (Sage) instead, select SageMath from the list. A notebook on the Python kernel does not understand Sage syntax such as x^2 or f(x) = ... .   The kernel panel, with SageMath as the current kernel.  Kernel panel listing Python 3 (Sage) and SageMath 10.9; current kernel is SageMath 10.9.    A useful habit in either environment: putting %display latex at the top of a cell renders results as typeset mathematics rather than plain text, which makes matrix and symbolic output very much easier to read.  It is worth knowing how far that setting reaches. The Sage cells on a single page of this book share one session which is why a later cell can use a function an earlier one defined. %display latex lives in that session rather than in the cell you typed it into, so setting it once, in the first cell you evaluate on a page, governs every evaluation that follows on that page. Reloading the page starts a fresh session and the setting is gone. If output that was typeset a moment ago comes back as plain text, a reload is usually the reason.  "
},
{
  "id": "fig-cocalc-create-project",
  "level": "2",
  "url": "sage-online.html#fig-cocalc-create-project",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " Creating a CoCalc project with the SageMath image.  Create a Project dialog: title Sage Tutorial, SageMath image selected, Create and Open button.  "
},
{
  "id": "fig-cocalc-new-project",
  "level": "2",
  "url": "sage-online.html#fig-cocalc-new-project",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " A newly opened project, ready for its first notebook.  Empty CoCalc project file view, with the pointer over the Notebook (Jupyter) tile.  "
},
{
  "id": "fig-cocalc-check-kernel",
  "level": "2",
  "url": "sage-online.html#fig-cocalc-check-kernel",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " The kernel panel, with SageMath as the current kernel.  Kernel panel listing Python 3 (Sage) and SageMath 10.9; current kernel is SageMath 10.9.  "
},
{
  "id": "sage-install",
  "level": "1",
  "url": "sage-install.html",
  "type": "Section",
  "number": "1.3",
  "title": "Installing SageMath Locally",
  "body": " Installing SageMath Locally   Sooner or later you will want Sage on your own machine to work offline, to use your own files, or simply to have the full resources of the computer in front of you.  Historically this meant building Sage from source, a compile measured in hours whose instructions filled the rest of this chapter. That is no longer the recommended path and is no longer described here. Sage is now packaged for conda-forge , which ships pre-built binaries; installation is a download rather than a build.  The instructions below are for Linux and macOS. On Windows, install the Windows Subsystem for Linux and follow the Linux instructions inside it. The authoritative and up-to-date version of all of this is the SageMath installation guide ; what follows is the short path that works.    Installing with conda-forge  You need a conda distribution first. Miniforge is the natural choice, because it is configured to use conda-forge and nothing else; Miniconda works too, provided you are deliberate about the channel. Install one of those, then create an environment that holds Sage and nothing else:   conda create -n sage -c conda-forge sage   Keeping Sage in its own environment matters more than it might appear. Sage pins a great many packages to versions it has been tested against, so installing it beside an existing scientific Python stack is a reliable way to spend an afternoon reading solver output. Give it its own environment and the question never arises.  Expect a sizeable install: the environment is around 390 packages, about 1.4 GB to download and roughly 8 GB of disk once unpacked, because Sage brings its whole ecosystem GAP, PARI, Singular, Maxima, R and more along with it. The time this takes is dominated by your connection rather than your processor; on a fast link the whole thing finished in under three minutes, where the old source build was measured in hours. Activate the environment when it finishes:   conda activate sage  sage --version   That prints the bare version number, 10.9 or whatever is current when you read this. If it does, you are done. Starting Sage itself gives you rather more the banner names the Sage version, its release date and the Python underneath it, which is the quickest way to confirm what you are actually running.    Running Sage from the command line  With the environment active, sage on its own starts the interactive REPL. This is the quickest way in for a one-off calculation or a quick test.   sage    A sample Sage command line session.  Matrix Manipulation CLI Example   Note the sage: prompt. The Sage REPL is IPython with Sage's own preparser in front of it, which is why 2^10 means exponentiation here as well as Python's own 2**10 , and why f(x) = x**2 defines a symbolic function. Those two are Sage conventions, not Python ones: a plain Python interpreter reads ^ as bitwise exclusive-or and rejects f(x) = ... outright.  To run a script rather than work interactively, hand the file to Sage:   sage myscript.sage   One difference will catch you out. The interactive prompt defines the symbolic variable x for you before you type anything; a script file does not. A script whose first line is integrate(sin(x)*x, x) fails with NameError: name 'x' is not defined , even though the identical line works in the REPL. Declare what you intend to use and the difference goes away:   x = var('x') print(integrate(sin(x)*x, x)) f(x) = x**2 print(f(5))   This is a good habit in any case: a script that declares its variables says what it means, and will still say it when the defaults change again.    Running Sage in a Jupyter notebook  The old Sage Notebook the sagenb server that once ran at localhost:8080  has been retired. Sage now uses Jupyter, and ships a kernel for it:   sage --notebook=jupyterlab   That opens JupyterLab in your browser. Its Launcher offers a tile per available kernel; choose SageMath rather than Python 3 , or you will get a plain Python notebook in which none of Sage's syntax works.   The JupyterLab Launcher, offering a SageMath kernel alongside Python 3.  Tab showing available selections   The shorter sage -n jupyter also works, but it opens the older, plainer Notebook interface rather than JupyterLab it is short for --notebook=jupyter , which is the classic Notebook. Either is fine; they run the same kernel. What you get is an online session's convenience with the whole of your own machine behind it, and your own files to hand.   "
},
{
  "id": "sage-command-line-4",
  "level": "2",
  "url": "sage-install.html#sage-command-line-4",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " A sample Sage command line session.  Matrix Manipulation CLI Example  "
},
{
  "id": "sage-jupyter-5",
  "level": "2",
  "url": "sage-install.html#sage-jupyter-5",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " The JupyterLab Launcher, offering a SageMath kernel alongside Python 3.  Tab showing available selections  "
},
{
  "id": "basics-introduction",
  "level": "1",
  "url": "basics-introduction.html",
  "type": "Section",
  "number": "2.1",
  "title": "What’s in This Chapter",
  "body": " What's in This Chapter  Here you will find a hotch potch of some basic SageMath concepts.  "
},
{
  "id": "sage-executing-commands",
  "level": "1",
  "url": "sage-executing-commands.html",
  "type": "Section",
  "number": "2.2",
  "title": "Executing Sage Commands",
  "body": " Executing Sage Commands  Most of your interaction will be by typing commands into a Sage cell . Just below this paragraph is an empty cell. Click once inside it and you will get a blinking cursor. The Evaluate button sits below the cell.   At the cursor, type 2+2 and then press Evaluate . Did a 4 appear below the cell? If so, you have successfully sent a command off for Sage to evaluate and you have received back the (correct) answer.  Here is another compute cell. Try evaluating the command factorial(300) here.   "
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
  "body": " Symbolic Manipulation  Sage not only solves equations numerically but also allows for symbolic manipulation. The page will give several illustrative examples.  The expand method    Notice how the show() method displays the output in a nicer manner. Without it you will see the less pretty output:  x^3 + 3*x^2 + 3*x + 1  Now the reverse! Perform a factor() on the expanded equation.   "
},
{
  "id": "sage-variables-plotting",
  "level": "1",
  "url": "sage-variables-plotting.html",
  "type": "Section",
  "number": "2.5",
  "title": "Declaring Variables and Plotting",
  "body": " Declaring Variables and Plotting   Sage allows us to solve equations symbolically . To make this possible we must define variables that are used in the symbolic manipulation.  We will demonstrate this using a complete differential equation example. Taking this approach has the additional advantage of introducing some other Sage features.  Don't worry if you have not yet covered differential equations in your studies. What follows is more to demonstrate SageMath capabilities rather than the maths. Come back here once you have solved some DE and it will then make more sense.    Use SageMath to solve differential equations  First we have to know how to describe a differential equation (DE) with Sage. The syntax may not be obvious but there are ample examples in the documentation.  Sage's desolve() handles many first- and second-order ordinary differential equations (ODEs), with or without initial values. The chapter on differential equations will go into more details. This particular example just uses DE to illustrate how variables are declared and used.   The example is a capacitor discharging through a resistor. Written in ordinary notation, the equation and its initial value are:      Here is the voltage across the capacitor at time , is the resistance and the capacitance. The equation says that the voltage plus times its rate of change is always zero, so the voltage decays. Starting from keeps the solution simple; it can be scaled to any other starting voltage afterwards. In Sage:   Or in the prettier format:   Line by line:   var('r c t') declares , and as symbols. Only is predefined in Sage; every other symbol has to be declared before it is used.   y = function('y')(t) makes an unknown function of rather than a plain symbol, so that diff(y,t) means its derivative.   de = y + r*c*diff(y,t) == 0 stores the equation itself in de . Inside an expression, == builds an equation instead of testing for equality.   desolve(de,[y,t],[0,1]) solves it. [y,t] names the unknown function and the independent variable, and [0,1] is the initial condition .    Now let us plot this, with :   Scaling the solution to gives a capacitor that starts at volts and settles at volts. Here it charges from 0 V to 10 V through and , a time constant of one second.   Adapted from the first example in Paul Lutus, Exploring Mathematics with Sage: Differential Equations .   "
},
{
  "id": "sage-and-python",
  "level": "1",
  "url": "sage-and-python.html",
  "type": "Section",
  "number": "2.6",
  "title": "Sage and Python",
  "body": " Sage and Python Python, Sage and   Sage is built on top of Python . It will do no harm to find out a little about this programming language and will aid your understanding of some of the examples used in this manual.    Lists, Tuples, and Dictionaries   Python has a number of built in data types. We will look at three that will come up again and again in this manual.    Lists Python Lists  Creating Lists Python Creating Lists     To create a list of items then use the [] operator filled with the items:     Creating an empty list and then adding items.   Notice that the items inside the list can be different types . In this case a string and a number .    Creating lists using python methods.   This is not a Python tutorial, so see the Python documentation for more on range() and list methods such as append() .     Accessing items in a list  Python  Accessing Lists    Indexing and slicing lists .     Tuples   Python  Tuples   A tuple is an immutable list. A tuple cannot be changed once it is created.  Tuples are defined exactly like lists except by using () brackets rather than [] brackets.   Tuples are handy structures for things like coordinates and are used extensively in the examples and exercises in this manual. For example, as co-ordinate ranges for plots. See for example the utility method plot_tangentline() .    Dictionaries (Associative Arrays)   Python  Dictionaries   Unlike lists, which are indexed by numbers, dictionaries are indexed by keys, which can be any immutable type.  A dictionary is a set of key : value pairs, with the requirement that the keys are unique (within the dictionary). Since Python 3.7 a dictionary remembers the order in which its keys were added. A pair of braces creates an empty dictionary: {} . Placing a comma-separated list of key:value pairs within the braces adds initial key:value pairs to the dictionary.     "
},
{
  "id": "coordgeom-circles",
  "level": "1",
  "url": "coordgeom-circles.html",
  "type": "Section",
  "number": "3.1",
  "title": "Circles",
  "body": " Circles   The circle with centre and radius is every point at distance from the centre. By Pythagoras: Almost every question about a circle and a line comes down to two things: completing the square to find the centre and radius, and solving a quadratic. Sage does both, and draws the picture, which is often the fastest way to see what is going on.  The cells on this page share their variables, so run them in order from the top. The helper functions in the first subsection are used all the way down.    Some helper functions  We work with and throughout, so declare them first.    Utility methods circle_equation() and centre_and_radius()  User Defined Functions circle_equation  User Defined Functions centre_and_radius   The first builds the equation of a circle from its centre and radius. The second goes the other way: it divides through so the term has coefficient 1, reads off , and from , and returns the centre and the radius .      Utility method meet_circle()  User Defined Functions meet_circle   The real points where a circle and a line meet: solve the two equations together and throw away any complex solutions.      Utility methods for points and lines  User Defined Functions gradient, length, midpoint  User Defined Functions line_through, y_form, tangent_at   The gradient, length and midpoint of ; the line through with gradient , and the same line rearranged as . Last, the tangent at a point on a circle: it is perpendicular to the radius at , so its gradient is divided by the radius's gradient. When the radius is horizontal the tangent is vertical, and that case is handled on its own.      Utility methods signed_term() and circle_text()  User Defined Functions circle_text   Sage prints (x - 3)^2 + (y + 2)^2 == 25 , which is fine for checking but not how we would write it. These two build the text of a circle's equation in both of its usual forms.      Utility method diagram()  User Defined Functions diagram   A picture drawn to scale: circles given as (centre, radius), lines given as equations, dashed segments between points, and named points labelled with their coordinates. set_aspect_ratio(1) is what keeps circles round and right angles looking like right angles.       A line and a circle meet twice, once or never  To find where the line meets a circle, put in for . That leaves a quadratic in , and its discriminant says how many answers there are:   positive: two points (the line cuts the circle, and the part between the points is a chord );  zero: one point (the line is a tangent );  negative: none (the line misses).   Move the line. The circle is (centre , radius ), and the sliders start on the line .   Things to try. Set with or : the horizontal tangents at the top and bottom of the circle, where the discriminant is exactly zero. With the two tangents are at , which are not on the slider's grid: move from to , or from to , and watch the discriminant change sign.    Centre and radius  A circle's equation is usually given multiplied out, as in . Complete the square in and in separately: so , that is : centre , radius . Note that the signs flip: gives an -coordinate of .  Sage's version, and a check that expanding the completed square gives the same equation back (Sage leaves where we moved it across to make ):   Both forms as text:   Two traps. If the and terms have a number in front, divide through by it first ( centre_and_radius does). And if comes out zero or negative there is no circle at all: Sage shows that as an imaginary radius.     Three circle properties  Each of these turns a circle question into a straight-line question about gradients.  The angle in a semicircle is a right angle. If is a diameter and is any other point on the circle, then and are perpendicular: the product of their gradients is . Here and are the ends of the horizontal diameter of our circle.   The perpendicular from the centre to a chord bisects the chord. So the foot of that perpendicular is simply the midpoint of the chord. Here the chord is where cuts the circle; the gradient from the centre to the midpoint , times the chord's gradient , is .   The tangent is perpendicular to the radius. So the gradient of the tangent at is divided by the gradient of the radius. The tangents at the two ends of the chord:   A picture makes all three visible at once. The chord is blue, the two tangents red and green, and the radii to the ends of the chord are dashed.   A radius that is vertical gives a horizontal tangent, with gradient , and the formula minus one over the gradient cannot be used. It is easy to miss without a sketch. The line touches the top of our circle; substituting it leaves a perfect square, which is what a repeated root, and so a tangent, looks like.     Two circles touching  Two circles touch when the distance between their centres is   the sum of the radii: they touch externally , side by side;  the difference of the radii: they touch internally , one inside the other.   Our circle, centre and radius , against a circle with centre and radius :    , so they touch externally, halfway along at . A circle with the same centre and radius would touch ours internally, since .    A circle through three points  Take , and . Look for a right angle first: if there is one, the angle in a semicircle makes the side opposite it a diameter, and the centre is that side's midpoint.   The right angle is at , so is the diameter:    Taking or as the diameter is the easy mistake; neither is opposite the right angle. Without a right angle, there is a method that always works: put all three points into and solve the three linear equations for , and . Sage does that directly.   That is , the same circle multiplied out.    Tangents from a point outside the circle  From a point outside a circle there are two tangents. Take the circle (centre , radius ) and the tangents through the origin. Every line through the origin is , with no constant term, and a tangent meets the circle exactly once, so the discriminant of the quadratic is zero. That gives an equation for .    For each gradient the quadratic is a perfect square, and its repeated root is the point of contact:    The picture shows a second method. Each radius to a point of contact is perpendicular to its tangent, so is a right-angled triangle. and the radius is , so by Pythagoras each tangent has length .    Practice with random questions  Each seed gives a question: a circle, a line cutting it at and , and the tangent at (the point further left). The same seed always gives the same question. The first cell makes the questions, the second writes the line as with whole numbers, and the third checks an answer.     Change the seed for a new question:   Work it out on paper, then type your answers here and run the cell. Use sqrt(10) for ; fractions such as 7\/5 are fine.   The worked answer:    "
},
{
  "id": "circle_equation",
  "level": "2",
  "url": "coordgeom-circles.html#circle_equation",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Utility methods <code class=\"code-inline tex2jax_ignore\">circle_equation()<\/code> and <code class=\"code-inline tex2jax_ignore\">centre_and_radius()<\/code>.",
  "body": " Utility methods circle_equation() and centre_and_radius()  User Defined Functions circle_equation  User Defined Functions centre_and_radius   The first builds the equation of a circle from its centre and radius. The second goes the other way: it divides through so the term has coefficient 1, reads off , and from , and returns the centre and the radius .    "
},
{
  "id": "meet_circle",
  "level": "2",
  "url": "coordgeom-circles.html#meet_circle",
  "type": "Definition",
  "number": "3.1.2",
  "title": "Utility method <code class=\"code-inline tex2jax_ignore\">meet_circle()<\/code>.",
  "body": " Utility method meet_circle()  User Defined Functions meet_circle   The real points where a circle and a line meet: solve the two equations together and throw away any complex solutions.    "
},
{
  "id": "coordgeom_lines",
  "level": "2",
  "url": "coordgeom-circles.html#coordgeom_lines",
  "type": "Definition",
  "number": "3.1.3",
  "title": "Utility methods for points and lines.",
  "body": " Utility methods for points and lines  User Defined Functions gradient, length, midpoint  User Defined Functions line_through, y_form, tangent_at   The gradient, length and midpoint of ; the line through with gradient , and the same line rearranged as . Last, the tangent at a point on a circle: it is perpendicular to the radius at , so its gradient is divided by the radius's gradient. When the radius is horizontal the tangent is vertical, and that case is handled on its own.    "
},
{
  "id": "circle_text",
  "level": "2",
  "url": "coordgeom-circles.html#circle_text",
  "type": "Definition",
  "number": "3.1.4",
  "title": "Utility methods <code class=\"code-inline tex2jax_ignore\">signed_term()<\/code> and <code class=\"code-inline tex2jax_ignore\">circle_text()<\/code>.",
  "body": " Utility methods signed_term() and circle_text()  User Defined Functions circle_text   Sage prints (x - 3)^2 + (y + 2)^2 == 25 , which is fine for checking but not how we would write it. These two build the text of a circle's equation in both of its usual forms.    "
},
{
  "id": "coordgeom_diagram",
  "level": "2",
  "url": "coordgeom-circles.html#coordgeom_diagram",
  "type": "Definition",
  "number": "3.1.5",
  "title": "Utility method <code class=\"code-inline tex2jax_ignore\">diagram()<\/code>.",
  "body": " Utility method diagram()  User Defined Functions diagram   A picture drawn to scale: circles given as (centre, radius), lines given as equations, dashed segments between points, and named points labelled with their coordinates. set_aspect_ratio(1) is what keeps circles round and right angles looking like right angles.    "
},
{
  "id": "coordgeom-circles-line-3",
  "level": "2",
  "url": "coordgeom-circles.html#coordgeom-circles-line-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "chord tangent "
},
{
  "id": "coordgeom-circles-touching-3",
  "level": "2",
  "url": "coordgeom-circles.html#coordgeom-circles-touching-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "externally internally "
},
{
  "id": "calculus-introduction",
  "level": "1",
  "url": "calculus-introduction.html",
  "type": "Section",
  "number": "4.1",
  "title": "Calculus in SageMath",
  "body": " Calculus in SageMath  SageMath has excellent functionality for Calculus. We will cover some of the basics here to give you some indication of what is possible.  "
},
{
  "id": "calculus-limits",
  "level": "1",
  "url": "calculus-limits.html",
  "type": "Section",
  "number": "4.2",
  "title": "Calculating Limits",
  "body": " Calculating Limits  The concept of the limit is often used to define the integral and the derivative of functions.  Here is an easy example to demonstrate Sage syntax for limits:   The following examples are taken from Essential Calculus - James Stewart .  See also the Sage Tutorial on Limits .  Example 2, page 26   Plotting this function will give us a better picture of what is happening:    Example 2, page 26  Graph of (x-1)\/(x^2-1) for x from -2 to 2, with a vertical asymptote and an open circle marking the missing point.   Sage Worked Examples Stewart : Section 1.3, Exercise 12, page 33 Stewart : Section 1.3, Exercise 12, page 33   Approaching from the right the values fall towards ; from the left they rise towards . The two one-sided limits differ, so the limit at does not exist. (Ask Sage for ex12.limit(x=-1) without a direction and it answers Infinity , meaning unsigned infinity, which hides this.)  From a plot or simplification of the equation you can visually see that there is an explosion at .   Note that we have used an exclude list (square brackets is a list) with one entry, namely . See what happens if you take this out. Also note that we have explicitly determined the upper and lower values. Again, experiment by taking these away or changing them.  Sage Worked Examples Stewart : Section 1.4, Exercise 14, page 44 Stewart : Section 1.4, Exercise 14, page 44    L'Hôpital's Rule  L'Hôpital's Rule   L'Hôpital's rule states that for functions and which are differentiable on an open interval except possibly at a point contained in , if   The differentiation of the numerator and denominator often simplifies the quotient or converts it to a limit that can be evaluated directly.    Example 2 above is a form at . Differentiating top and bottom gives which agrees with Sage.  "
},
{
  "id": "calculus-limits-11",
  "level": "2",
  "url": "calculus-limits.html#calculus-limits-11",
  "type": "Figure",
  "number": "4.2.1",
  "title": "",
  "body": " Example 2, page 26  Graph of (x-1)\/(x^2-1) for x from -2 to 2, with a vertical asymptote and an open circle marking the missing point.  "
},
{
  "id": "hospital",
  "level": "2",
  "url": "calculus-limits.html#hospital",
  "type": "Principle",
  "number": "4.2.2",
  "title": "L’Hôpital’s Rule.",
  "body": " L'Hôpital's Rule  L'Hôpital's Rule   L'Hôpital's rule states that for functions and which are differentiable on an open interval except possibly at a point contained in , if   The differentiation of the numerator and denominator often simplifies the quotient or converts it to a limit that can be evaluated directly.   "
},
{
  "id": "calculus-derivatives",
  "level": "1",
  "url": "calculus-derivatives.html",
  "type": "Section",
  "number": "4.3",
  "title": "Derivatives",
  "body": " Derivatives   Here are some basic examples to give a quick overview (without explanation) of how SageMath can be helpful for calculating derivatives:   The following examples are taken from Essential Calculus - James Stewart, Chapter 2 .    Examples From Chapter 2   Section 2.1  Sage Worked Examples Stewart : Section 2.1, Exercise 25 - 30, Page 82 Section 2.1, Exercise 25 - 30, Page 82   Sage Worked Examples Stewart : Section 2.1, Exercise 34, Page 82 Section 2.1, Exercise 34, Page 82   Sage Worked Examples Stewart : Section 2.1, Exercise 49, Page 83 Section 2.1, Exercise 49, Page 83   Sage's ind means the expression stays bounded but has no limit. Taking , the difference quotient at is , which also has no limit, so is continuous at but not differentiable there.  Sage Worked Examples Stewart : Section 2.1, Exercise 50, Page 83 Section 2.1, Exercise 50, Page 83   Here the difference quotient is , which tends to . So exists even though has no limit as : is differentiable at , but its derivative is not continuous there.    Section 2.2  Sage Worked Examples Stewart : Section 2.2, Exercise 44, Page 94 Section 2.2, Exercise 44, Page 94     Section 2.3  Sage Worked Examples Stewart : Section 2.3, Exercises 29, Page 105 Section 2.3, Exercises 29, Page 105   Sage Worked Examples Stewart : Section 2.3, Exercises 30, Page 105 Section 2.3, Exercises 30, Page 105     Section 2.4  Sage Worked Examples Stewart : Section 2.4, Exercises 27, Page 112 Section 2.4, Exercises 27, Page 112   We have performed the same action - plot a graph and its tangent line - several times now. Time to encapsulate it in our own function! Run the next sage cell example to define the function plot_tangentline .  This is a Python function that takes three arguments:  f the function we want to plot.  pt the point on the function for which we want to draw the tangent line.  xrange the range of coordinates that we want the graph to span.    Running the next Sage cell will not produce any visible results but will just store this user defined function in memory for use in other cells. The next few examples make use of this user defined function to save a bit of typing.  Remember to run this before running any other Sage Cell that makes use of it.   Utility method plot_tangentline()  User Defined Functions plot_tangentline      Redo the previous example using our method:   Now wasn't that a lot easier! Now for the rest.  Sage Worked Examples Stewart : Section 2.4, Exercises 28 - 31, Page 112 Section 2.4, Exercises 28 - 31, Page 112   Sage Worked Examples Stewart : Section 2.4, Exercise 36, Page 113 Section 2.4, Exercise 36, Page 113, Nth Derivative of a function  The second argument to the diff method is the derivative order: 1 for 1st derivative, 2 for second derivative, etc.   Sage Worked Examples Stewart : Section 2.4, Exercise 52, Page 114 Section 2.4, Exercise 52, Page 114  This demonstrates the use of some predefined names: theta and mu . These will get formatted to and when you use show() . Find out about LaTex to see what the other possibilities are, for example, xi for and Xi for uppercase , and so on.      Section 2.6 Implicit Differentiation  Sage Worked Examples Stewart : Section 2.6, Example 2 Section 2.6, Example 2 - The Folium Of Descartes   To plot this function we use the SageMath implicit_plot method.   Let's explore this function a bit more with SageMath. Some of this may not make any sense just now but will become clearer as the course proceeds.   Now that we have familiarised ourselves with the shape of this curve, let's use Sage to find the equation of the tangent line at . Implicit differentiation is required here to compute so that we can find the gradient at this point.  Next find the points where the tangent is horizontal, by using solve() on our expression together with .  The solutions are printed using a for loop (learn some Python!) and an if statement that prints results only if and are real - in the 'ring' RR . There are two solutions, and the plot shows why. At the tangent is horizontal. At the curve crosses itself and is : one branch passes through horizontally, the other vertically. Take some time to understand the code used to do the plotting.   Utility method point_with_coords()  User Defined Functions point_with_coords       Utility method cross_hair()  User Defined Functions cross_hair       Sage Worked Examples Stewart : Section 2.6, Exercise 3, Page 127 Section 2.6, Exercise 3, Page 127   Summary  Differentiate the full equation with respect to . Use the chain rule for variable results in: Rearranging gives:  The remaining equations in this section will be solved without explanation.  The following examples make use of this predefined function. It is not very robust and assumes that the expr argument is a Sage expression in the variables and .  Make sure you run this before running the other examples. There will be no output but the function will be stored in memory available for use in other cells.   Utility method my_implicit_derivative()  User Defined Functions my_implicit_derivative      Sage Worked Examples Stewart : Section 2.6, Exercise 4, Page 127 Section 2.6, Exercise 4, Page 127   Sage Worked Examples Stewart : Section 2.6, Exercise 5, Page 127 Section 2.6, Exercise 5, Page 127   Sage Worked Examples Stewart : Section 2.6, Exercise 6, Page 127 Section 2.6, Exercise 6, Page 127   Sage Worked Examples Stewart : Section 2.6, Exercise 7-16, Page 127 Section 2.6, Exercise 7 - 16, Page 127   Sage Worked Examples Stewart : Section 2.6, Exercise 19, Page 127 Section 2.6, Exercise 19, Page 127   Sage Worked Examples Stewart : Section 2.6, Exercise 20, Page 127 Section 2.6, Exercise 20, Page 127   Sage Worked Examples Stewart : Section 2.6, Exercise 21, Page 127 Section 2.6, Exercise 21 - Cardioid, Page 127   Sage Worked Examples Stewart : Section 2.6, Exercise 23, Page 127 Section 2.6, Exercise 23 - Lemniscate, Page 127    "
},
{
  "id": "plot_tangentline",
  "level": "2",
  "url": "calculus-derivatives.html#plot_tangentline",
  "type": "Definition",
  "number": "4.3.1",
  "title": "Utility method <code class=\"code-inline tex2jax_ignore\">plot_tangentline()<\/code>.",
  "body": " Utility method plot_tangentline()  User Defined Functions plot_tangentline     "
},
{
  "id": "point_with_coords",
  "level": "2",
  "url": "calculus-derivatives.html#point_with_coords",
  "type": "Definition",
  "number": "4.3.2",
  "title": "Utility method <code class=\"code-inline tex2jax_ignore\">point_with_coords()<\/code>.",
  "body": " Utility method point_with_coords()  User Defined Functions point_with_coords     "
},
{
  "id": "cross_hair",
  "level": "2",
  "url": "calculus-derivatives.html#cross_hair",
  "type": "Definition",
  "number": "4.3.3",
  "title": "Utility method <code class=\"code-inline tex2jax_ignore\">cross_hair()<\/code>.",
  "body": " Utility method cross_hair()  User Defined Functions cross_hair     "
},
{
  "id": "my_implicit_derivative",
  "level": "2",
  "url": "calculus-derivatives.html#my_implicit_derivative",
  "type": "Definition",
  "number": "4.3.4",
  "title": "Utility method <code class=\"code-inline tex2jax_ignore\">my_implicit_derivative()<\/code>.",
  "body": " Utility method my_implicit_derivative()  User Defined Functions my_implicit_derivative     "
},
{
  "id": "calculus-integration",
  "level": "1",
  "url": "calculus-integration.html",
  "type": "Section",
  "number": "4.4",
  "title": "Integration",
  "body": " Integration  Here are some examples of indefinite integrals to demonstrate the power of SageMath:   Now for some Definite Integrals. For example:   This can be confirmed in SageMath quite simply:   "
},
{
  "id": "cap-2017-hw2",
  "level": "1",
  "url": "cap-2017-hw2.html",
  "type": "Section",
  "number": "4.5",
  "title": "CAP 2017, HW 2 due January 31",
  "body": " CAP 2017, HW 2 due January 31  Homework from the University of Edinburgh's first-year course Calculus and its Applications (MATH08058) , known as CAP, from spring 2017. The answers are my own worked solutions.   The Definition of a Derivative   The computation of the slope of a tangent line, the instantaneous rate of change of a function, at can be found from the following limit:   With a small adjustment in notation this limit can be rephrased.  The derivative of with respect to is the function and is defined as:      The Power Rule   If is a function such that , and is differentiable at , then      Linear Approximation   Given a twice continuously differentiable function of one real number variable, Taylor's theorem for the case states that: where is the remainder term. The linear approximation is obtained by dropping the remainder: . This is a good approximation for when it is close enough to ; since a curve, when closely observed, will begin to resemble a straight line. Therefore, the expression on the right-hand side is just the equation for the tangent line to the graph of at . For this reason, this process is also called the tangent line approximation .       From first principles find the derivative of    Both methods yield .    First Method:     Second Method:         Differentiate showing each step and stating which rules are used.                Use Linear Approximation to calculate .                Implicit Differentiation                 Implicit Differentiation           Implicit:   Explicit:   As you can see the results are the same for each method.  The problem that implicit differentiation solves is that it is often difficult or impossible to rearrange to have on the left by its own.     Implicit Differentiation of   Implicit Differentiation of   Exercise 2.1   Exercise 2.2   Exercise 2.3   Exercise 2.4   Exercise 2.5   Exercise 3.1   Exercise 3.2     "
},
{
  "id": "definition-derivative",
  "level": "2",
  "url": "cap-2017-hw2.html#definition-derivative",
  "type": "Definition",
  "number": "4.5.1",
  "title": "The Definition of a Derivative.",
  "body": " The Definition of a Derivative   The computation of the slope of a tangent line, the instantaneous rate of change of a function, at can be found from the following limit:   With a small adjustment in notation this limit can be rephrased.  The derivative of with respect to is the function and is defined as:    "
},
{
  "id": "definition-derivative-power",
  "level": "2",
  "url": "cap-2017-hw2.html#definition-derivative-power",
  "type": "Definition",
  "number": "4.5.2",
  "title": "The Power Rule.",
  "body": " The Power Rule   If is a function such that , and is differentiable at , then    "
},
{
  "id": "definition-linear-approx",
  "level": "2",
  "url": "cap-2017-hw2.html#definition-linear-approx",
  "type": "Definition",
  "number": "4.5.3",
  "title": "Linear Approximation.",
  "body": " Linear Approximation   Given a twice continuously differentiable function of one real number variable, Taylor's theorem for the case states that: where is the remainder term. The linear approximation is obtained by dropping the remainder: . This is a good approximation for when it is close enough to ; since a curve, when closely observed, will begin to resemble a straight line. Therefore, the expression on the right-hand side is just the equation for the tangent line to the graph of at . For this reason, this process is also called the tangent line approximation .   "
},
{
  "id": "cap-2017-hw2-6-1",
  "level": "2",
  "url": "cap-2017-hw2.html#cap-2017-hw2-6-1",
  "type": "Exercise",
  "number": "4.5.1",
  "title": "",
  "body": "  From first principles find the derivative of    Both methods yield .    First Method:     Second Method:      "
},
{
  "id": "cap-2017-hw2-6-2",
  "level": "2",
  "url": "cap-2017-hw2.html#cap-2017-hw2-6-2",
  "type": "Exercise",
  "number": "4.5.2",
  "title": "",
  "body": "  Differentiate showing each step and stating which rules are used.             "
},
{
  "id": "cap-2017-hw2-6-3",
  "level": "2",
  "url": "cap-2017-hw2.html#cap-2017-hw2-6-3",
  "type": "Exercise",
  "number": "4.5.3",
  "title": "",
  "body": "  Use Linear Approximation to calculate .             "
},
{
  "id": "cap-2017-hw2-6-4",
  "level": "2",
  "url": "cap-2017-hw2.html#cap-2017-hw2-6-4",
  "type": "Exercise",
  "number": "4.5.4",
  "title": "",
  "body": "  Implicit Differentiation              "
},
{
  "id": "cap-2017-hw2-6-5",
  "level": "2",
  "url": "cap-2017-hw2.html#cap-2017-hw2-6-5",
  "type": "Exercise",
  "number": "4.5.5",
  "title": "",
  "body": "  Implicit Differentiation           Implicit:   Explicit:   As you can see the results are the same for each method.  The problem that implicit differentiation solves is that it is often difficult or impossible to rearrange to have on the left by its own.   "
},
{
  "id": "cap-2017-hw3",
  "level": "1",
  "url": "cap-2017-hw3.html",
  "type": "Section",
  "number": "4.6",
  "title": "CAP 2017, HW 3 due February 7",
  "body": " CAP 2017, HW 3 due February 7   Another homework from the University of Edinburgh's first-year course Calculus and its Applications (MATH08058) , known as CAP, from spring 2017. The answers are my own worked solutions.  Give complete explanations of what you are doing, written in full sentences. Solutions that have all the correct calculations and computations, but lack explanations, will not get full marks!    Rumour Spread and the Logistic Function  Under certain circumstances a rumour spreads according to the equation where is the proportion of the population that knows the rumor at time (in days) and and are positive constants.  Note that this is an example of the Logistic Function . When you get to differential equations this equation is quite important. Gilbert Strang gives a good presentation on this subject.  It is a very important equation and comes up often. See Logistic function (wiki)  The inverse function is an example of a Logit function (wiki) .     Find . What does this mean for the rumor?    After a long period of time everyone knows the rumour!           Find the rate of spread of the rumor.              Find the inverse function of and give an interpretation of the meaning.              Graph for the case and use your graph to estimate how long it will take for 80% of the population to hear the rumor. Can you also calculate this time?     days.  See Sage plot of below.    Use the inverse function with a value of    See Sage plot of inverse below.     Plot of .   From the sage plot we can see that the time to get to 80% is about days.  Plot of (the inverse of ).   From the sage calculation we can see that the time to get to 80% is days.      Radioactive Decay: Bismuth-210  Bismuth-210 has a half-life of 5.0 days.     A sample originally has a mass of . Find a formula for the mass remaining after days.    The mass (in ) after time (in days) is:     The rate of change of mass is proportional to the current mass: Lets call the constant of proportionality . The negative is because this is a decay.  The solution of this equation is: (where is the mass at .)  At the half-life and :      We are told that the half-life is days.   Substituting with the original mass gives us: where is the mass in and is the time in days.      Find the mass remaining after days.                When is the mass reduced to ?     days.           Sketch a graph of the mass function.    See Sage plot of mass function below.     Sketch of the mass function. (Note are easier for plots)       Second Derivatives and Taylor Series  If is continuous, show that:    The Definition of Taylor Series   Given a smooth function , we can always write down a Taylor series; there is no guarantee that the series converges to anything, let alone to the function. Given a smooth function , its Taylor series (around ) is A common mistake is to use instead of . Given a smooth function , its Taylor series expanded around is   The first few entries are        From first principles.    The first derivative is given by:   Applying this definition twice, with the same in each step, suggests the result (see Math Stack Q&A ), but it is not a proof: it replaces two separate limits with one. L'Hôpital's rule gives one.  As the numerator and the denominator both tend to , so differentiate each with respect to : Each quotient is a difference quotient for , so each tends to .      Using Taylor Series .    Expand about to second order, with the remainder in Lagrange form: where lies between and , and between and . Adding, the terms cancel: As both and tend to , and is continuous, so the right-hand side tends to .       The Mean Value Theorem  Suppose that for all values of , where is a function defined on all of the real numbers and differentiable everywhere. Show that      The Mean Value Theorem states that if is defined and continuous on the interval and differentiable on , then there is at least one number in the interval (that is ) such that            Brian M. Scott Second derivative formula derivation . Math StackExchange   Wiki Taylor Series.     "
},
{
  "id": "hw3-rumour-6-1",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-rumour-6-1",
  "type": "Exercise",
  "number": "4.6.1.a)",
  "title": "",
  "body": "  Find . What does this mean for the rumor?    After a long period of time everyone knows the rumour!        "
},
{
  "id": "hw3-rumour-6-2",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-rumour-6-2",
  "type": "Exercise",
  "number": "4.6.1.b)",
  "title": "",
  "body": "  Find the rate of spread of the rumor.           "
},
{
  "id": "hw3-rumour-6-3",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-rumour-6-3",
  "type": "Exercise",
  "number": "4.6.1.c)",
  "title": "",
  "body": "  Find the inverse function of and give an interpretation of the meaning.           "
},
{
  "id": "hw3-rumour-6-4",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-rumour-6-4",
  "type": "Exercise",
  "number": "4.6.1.d)",
  "title": "",
  "body": "  Graph for the case and use your graph to estimate how long it will take for 80% of the population to hear the rumor. Can you also calculate this time?     days.  See Sage plot of below.    Use the inverse function with a value of    See Sage plot of inverse below.   "
},
{
  "id": "hw3-decay-3-1",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-decay-3-1",
  "type": "Exercise",
  "number": "4.6.2.a)",
  "title": "",
  "body": "  A sample originally has a mass of . Find a formula for the mass remaining after days.    The mass (in ) after time (in days) is:     The rate of change of mass is proportional to the current mass: Lets call the constant of proportionality . The negative is because this is a decay.  The solution of this equation is: (where is the mass at .)  At the half-life and :      We are told that the half-life is days.   Substituting with the original mass gives us: where is the mass in and is the time in days.   "
},
{
  "id": "hw3-decay-3-2",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-decay-3-2",
  "type": "Exercise",
  "number": "4.6.2.b)",
  "title": "",
  "body": "  Find the mass remaining after days.             "
},
{
  "id": "hw3-decay-3-3",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-decay-3-3",
  "type": "Exercise",
  "number": "4.6.2.c)",
  "title": "",
  "body": "  When is the mass reduced to ?     days.        "
},
{
  "id": "hw3-decay-3-4",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-decay-3-4",
  "type": "Exercise",
  "number": "4.6.2.d)",
  "title": "",
  "body": "  Sketch a graph of the mass function.    See Sage plot of mass function below.   "
},
{
  "id": "definition-taylor-series",
  "level": "2",
  "url": "cap-2017-hw3.html#definition-taylor-series",
  "type": "Definition",
  "number": "4.6.1",
  "title": "The Definition of Taylor Series.",
  "body": " The Definition of Taylor Series   Given a smooth function , we can always write down a Taylor series; there is no guarantee that the series converges to anything, let alone to the function. Given a smooth function , its Taylor series (around ) is A common mistake is to use instead of . Given a smooth function , its Taylor series expanded around is   The first few entries are    "
},
{
  "id": "hw3-taylor-4-1",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-taylor-4-1",
  "type": "Exercise",
  "number": "4.6.3.a)",
  "title": "",
  "body": "  From first principles.    The first derivative is given by:   Applying this definition twice, with the same in each step, suggests the result (see Math Stack Q&A ), but it is not a proof: it replaces two separate limits with one. L'Hôpital's rule gives one.  As the numerator and the denominator both tend to , so differentiate each with respect to : Each quotient is a difference quotient for , so each tends to .   "
},
{
  "id": "hw3-taylor-4-2",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-taylor-4-2",
  "type": "Exercise",
  "number": "4.6.3.b)",
  "title": "",
  "body": "  Using Taylor Series .    Expand about to second order, with the remainder in Lagrange form: where lies between and , and between and . Adding, the terms cancel: As both and tend to , and is continuous, so the right-hand side tends to .   "
},
{
  "id": "hw3-mvt-3-1",
  "level": "2",
  "url": "cap-2017-hw3.html#hw3-mvt-3-1",
  "type": "Exercise",
  "number": "4.6.4.a)",
  "title": "",
  "body": "  The Mean Value Theorem states that if is defined and continuous on the interval and differentiable on , then there is at least one number in the interval (that is ) such that        "
},
{
  "id": "calculus-references",
  "level": "1",
  "url": "calculus-references.html",
  "type": "References",
  "number": "4.7",
  "title": "References",
  "body": " References  Stewart, James Essential Calculus: Early Transcendentals . Second Edition, 2013. ISBN-13: 978-1133112280, ISBN-10: 1133112285 Amazon UK    Sage Calculus Tutorial - Limits    Sage Calculus Tutorial - Continuity    Sage Calculus Tutorial - One Sided Limits    Sage Calculus Tutorial - Limits At Infinity    Sage Calculus Tutorial - Slant Asymptotes   "
},
{
  "id": "first-order-de",
  "level": "1",
  "url": "first-order-de.html",
  "type": "Section",
  "number": "5.1",
  "title": "First Order Differential Equations",
  "body": " First Order Differential Equations   First Example   For this first example, we'll look at a simple problem so that we can concentrate on the SageMath commands without having to deal with the mathematical details.        The General Solution  First define as a function of    Next define our DE. Notice the ' == ' rather than the ' = ' when setting the RHS to zero. We are defining a Sage variable ' ' to hold the differential equation. The first ' = ' is to set the variable equal to our DE.   The derivative(y,x) is a Sage method that is passed a function , in this case . Of course, this has been defined above as . The derivative() method also takes one or more additional arguments for the equation variable, in this case .  This is a good point to talk about the Sage help facility.  Try the following:   This is a typical Docstring output detailing the signature (the required arguments) and details on how to use the method.  Notice that an alias for this method is diff . In other words an alias for derivative(y,x) would be diff(y,x) .  Now for the general solution. For this we use the desolve() method - d ifferential e quation solve . Try help(desolve) to read the built-in documentation.   This is the general solution as can be seen by the constant.  Let us now do two things: store the solution into a variable, and display the solution in a prettier format:        Initial Conditions  The initial condition for this equation is . That is, at .  From the Docstring for desolve() you can see :  \"ics\" - (optional) the initial or boundary conditions  for a first-order equation, specify the initial \"x\" and \"y\"    So let us try it. Notice the [0,1] for the [x,y] initial conditions.      Here we have again stored the solution to a variable sol_initial_con and used show() to pretty-print the output.    Plotting the Solution  Have a look at the documentation for plot() with help(plot) .  From this you can see how to graph from and set the minimum y using :   Spend some time studying the other options.    Numerical Solution  In practice most differential equations cannot be solved analytically, and we have to resort to numerical methods. Sage has several, and this is a good moment to meet the Tab key, which is the quickest way to find them.  Tab completion does not work in the Sage cells on this page. It needs a notebook, such as the CoCalc notebook described in . In a notebook cell, type desol and press Tab . A drop-down list shows every name that completes what you have typed, including the family of desolve solvers.   Tab completion in a CoCalc notebook.  Notebook cell containing desol, with a drop-down of desolve functions; desolve_rk4 is highlighted.   Choose desolve_rk4 , the fourth-order Runge Kutta solver. To read its documentation, call help() on it, as in the cell below. It works here as well as in a notebook.    These two solutions can be plotted together. As can be expected the operator acting on two plots will display them together.     Plotting the Vector Field  Let us re-write our original equation as:   There is a nice function plot_slope_field() that can be used to plot this equation over a range of and .  Previously we defined as a function. Here we have to redefine it as a variable.   If you plot this together with exact plot from above you can see that slope plot gives us a view of all the whole equation and not just a particular solution for a single set of initial conditions.      Second Example  This second example takes the RC circuit of and drives it with a sine wave, a model for any system pushed by a periodic input. The differential equation is:   We give no initial value, because we are after the long-run response to the drive, whatever state the system started in. Here is the process for solving it:      This is correct, but it is not in the more recognizable form, because it mixes two parts. Without an initial value, desolve() returns the general solution, with an arbitrary constant ( _C in the raw Sage response). Note that this is not the capacitance .  Multiply out and the inside the bracket cancels the outside it, except on the term. So the solution is a transient  , which depends on the starting state and dies away, plus the steady-state response to the drive. To keep only the steady state, set to zero:       "
},
{
  "id": "fig-cocalc-tab-completion",
  "level": "2",
  "url": "first-order-de.html#fig-cocalc-tab-completion",
  "type": "Figure",
  "number": "5.1.1",
  "title": "",
  "body": " Tab completion in a CoCalc notebook.  Notebook cell containing desol, with a drop-down of desolve functions; desolve_rk4 is highlighted.  "
},
{
  "id": "second-order-de",
  "level": "1",
  "url": "second-order-de.html",
  "type": "Section",
  "number": "5.2",
  "title": "Second Order Differential Equations",
  "body": " Second Order Differential Equations   First Example   For this first example, we'll look at a harmonic oscillator problem with unit constants.   Initial conditions:      The General Solution  As before, we define and our DE. Notice the as the third argument to the diff() method. This tells the method to differentiate twice. We could have used diff(y,x,x) instead. Notice also we are using the alias diff for derivative .   Now obtain the general solution:   This is the general solution as can be seen by the constants.       Initial Conditions  From the Docstring for desolve we find that should be so let us try it.      Here we have again stored the solution to a variable sol_initial_con and used show() to pretty-print the output.  Try using some other initial conditions, for example,       As you can see these two particular solutions are instances of the general solution given above.    Symbolic Differential Equations  Let us now try and solve the same equation this time with a mass and spring constant .   Now we have to define additional variables for the two constants. It is also useful to add some constraints onto these variables. We do this using the assume() method:      Notice that we had to specify which of the variables is the independent variable using the ivar=x argument.    "
},
{
  "id": "system-of-de",
  "level": "1",
  "url": "system-of-de.html",
  "type": "Section",
  "number": "5.3",
  "title": "Systems Of Equations",
  "body": " Systems Of Equations   First Example  Let us look at the following pair of coupled first order differential equations:    Initial conditions:    You should now be comfortable with defining the variables, the functions, and the initial conditions. The only difference is the use of the desolve_system() method. Its ics list is the starting time followed by the starting values, in the same order as the functions: here [0,1,2] means , , . So let us jump straight in:   Try this for fun:    A controlled explosion!   "
},
{
  "id": "exercises-de",
  "level": "1",
  "url": "exercises-de.html",
  "type": "Exercises",
  "number": "5.4",
  "title": "Exercises",
  "body": " Exercises    Response to Exponential Input  Consider the following differential equation:    This is the standard growth equation with an exponential forcing term .  We look for a particular solution of the form:   where is a constant.  Substituting we get:   Rearranging gives:   Full solution is the particular solution plus null (or homogeneous ) solution:   From the initial conditions we get:   Substituting in gives:   Rearranging we can see the effect of the forcing in addition to the homogeneous term:   In Strang's terminology:   That is, the solution is a combination of the standard homogeneous term - the standard growth factor - plus an extra term coming from the forcing factor. Notice that this extra term has a singularity (division by zero) at . This is Resonance .  This singularity can be handled using L'Hopital's Rule   Gilbert Strang In Action  Professor Strang at Blackboard   The full solution, using L'Hopital, should match the final solution in Strang's Lecture .   Now try and solve this using SageMath.    Remind yourself how to obtain the homogeneous (null) solution:  t,a = var('t,a') y = function('y')(t) de1 = diff(y,t) == a*y sol1 = desolve(de1,y, ivar=t) show(sol1)  and is the general solution to .  Also have a look at the screenshot above!    Sage Commands:  t, s, a, y0 = var ('t, s, a, y0') y = function('y')(t) de = diff(y,t) == a*y + e^(s*t) sol=desolve(de,y, ivar=t, ics=[0,y0]) show(sol)  This results in:   This is not quite the same format as Strang but it is easy to see that it is equivalent.  As mentioned above this solution can be taken further by using L'Hopital's Rule. We can circumvent the catastrophe by differentiating the numerator and denominator.  Sage Commands:  numerator = e^(s*t) - e^(a*t) numerator.diff(s) denominator= s - a denominator.diff(s)  This results in  Hence the full solution using L'Hopital now matches Strang's final solution:       Response to Oscillating Input  Consider the following differential equation:    This is the standard growth equation with a sinusoidal input term .  We look for a particular solution of the form:   where and are constants.  Now try and solve this using SageMath.    Sage Commands:  t, omega, a, y0 = var ('t, omega, a, y0') y = function('y')(t) de = diff(y,t) == a*y + cos(omega*t) sol=desolve(de,y, ivar=t, ics=[0,y0]) show(sol)  This results in:     "
},
{
  "id": "exercises-de-2",
  "level": "2",
  "url": "exercises-de.html#exercises-de-2",
  "type": "Exercise",
  "number": "5.4.1",
  "title": "",
  "body": "  Response to Exponential Input  Consider the following differential equation:    This is the standard growth equation with an exponential forcing term .  We look for a particular solution of the form:   where is a constant.  Substituting we get:   Rearranging gives:   Full solution is the particular solution plus null (or homogeneous ) solution:   From the initial conditions we get:   Substituting in gives:   Rearranging we can see the effect of the forcing in addition to the homogeneous term:   In Strang's terminology:   That is, the solution is a combination of the standard homogeneous term - the standard growth factor - plus an extra term coming from the forcing factor. Notice that this extra term has a singularity (division by zero) at . This is Resonance .  This singularity can be handled using L'Hopital's Rule   Gilbert Strang In Action  Professor Strang at Blackboard   The full solution, using L'Hopital, should match the final solution in Strang's Lecture .   Now try and solve this using SageMath.    Remind yourself how to obtain the homogeneous (null) solution:  t,a = var('t,a') y = function('y')(t) de1 = diff(y,t) == a*y sol1 = desolve(de1,y, ivar=t) show(sol1)  and is the general solution to .  Also have a look at the screenshot above!    Sage Commands:  t, s, a, y0 = var ('t, s, a, y0') y = function('y')(t) de = diff(y,t) == a*y + e^(s*t) sol=desolve(de,y, ivar=t, ics=[0,y0]) show(sol)  This results in:   This is not quite the same format as Strang but it is easy to see that it is equivalent.  As mentioned above this solution can be taken further by using L'Hopital's Rule. We can circumvent the catastrophe by differentiating the numerator and denominator.  Sage Commands:  numerator = e^(s*t) - e^(a*t) numerator.diff(s) denominator= s - a denominator.diff(s)  This results in  Hence the full solution using L'Hopital now matches Strang's final solution:    "
},
{
  "id": "exercises-de-3",
  "level": "2",
  "url": "exercises-de.html#exercises-de-3",
  "type": "Exercise",
  "number": "5.4.2",
  "title": "",
  "body": "  Response to Oscillating Input  Consider the following differential equation:    This is the standard growth equation with a sinusoidal input term .  We look for a particular solution of the form:   where and are constants.  Now try and solve this using SageMath.    Sage Commands:  t, omega, a, y0 = var ('t, omega, a, y0') y = function('y')(t) de = diff(y,t) == a*y + cos(omega*t) sol=desolve(de,y, ivar=t, ics=[0,y0]) show(sol)  This results in:    "
},
{
  "id": "differential-references",
  "level": "1",
  "url": "differential-references.html",
  "type": "References",
  "number": "5.5",
  "title": "References",
  "body": " References  Strang, Gilbert and Moler, Cleve Learn Differential Equations: Up Close with Gilbert Strang and Cleve Moler . RES.18-009 Fall 2015. Massachusetts Institute of Technology: MIT OpenCourseWare   Lutus, Paul Applying Sage To Physics - Differential Equations . Arachnoid - Mathematics - Sage    Dr Underwood's Physics YouTube page . Differential Equations in Sage - Part 1    Dr Underwood's Physics YouTube page . Differential Equations in Sage - Part 2   "
},
{
  "id": "linear-algebra-introduction",
  "level": "1",
  "url": "linear-algebra-introduction.html",
  "type": "Section",
  "number": "6.1",
  "title": "About This Exam",
  "body": " About This Exam  A1 to A3 are questions from the University of Edinburgh's December 2016 exam for Introduction to Linear Algebra (MATH08057) , a first-year course. The solutions are my own.  "
},
{
  "id": "linear-algebra-a1",
  "level": "1",
  "url": "linear-algebra-a1.html",
  "type": "Section",
  "number": "6.2",
  "title": "A1",
  "body": " A1   Linear Algebra Exam A1  Let be a linear transformation from which is a projection and suppose that Find the standard matrix of (The Projection Matrix).  [6 marks]   We will use the techniques detailed by Professor Strang in the lecture series 18.06 Linear Algebra Lecture 15: Projections onto subspaces    Diagram Of The Problem  Blackboard diagram: vector b projected onto the line through a.    Professor Strang In Action  Professor Strang at Blackboard    Projection Matrix Formula  Blackboard: p = a (a^T b)\/(a^T a); the projection is p = Pb with projection matrix P = a a^T \/ (a^T a).   In these screenshots we can see that vector is the projection of vector onto .   is a multiple, , of : The error vector is given by: The other piece of information we require is that is perpendicular to . In other words, the dot product of these two vectors is zero. Recall that the dot product of two vectors is the same as the transpose of one with the other.  Combining the above gives us:    Since then:   From this we can see that the Projection Matrix, , is given by:   This matches the formula in the screenshot shown in figure above. In our exercise becomes .  Now lets see how we can solve this example using SageMath.  One of the most annoying points is that vectors are represented as rows. Usually, we prefer to write them in column form. However, we can switch the view by using the column() method on the vector.   The vector times the transpose of itself can be found by taking the outer_product() :   The dot product (inner product) given by is easily found by either of these two steps:   Combining these we get the complete solution for , what Strang calls as:   These concepts are combined with some fancy plotting methods to give us a nice visualisation of the problem:   Notice that the diagram is upside down compared with Strang's and that we multiplied by a factor of 2 so that we could more clearly see that lies on the same line as .  Let us now check some other properties of the projection matrix   "
},
{
  "id": "exam_a1",
  "level": "2",
  "url": "linear-algebra-a1.html#exam_a1",
  "type": "Example",
  "number": "6.2.1",
  "title": "",
  "body": " Linear Algebra Exam A1  Let be a linear transformation from which is a projection and suppose that Find the standard matrix of (The Projection Matrix).  [6 marks]  "
},
{
  "id": "linear-algebra-a1-4",
  "level": "2",
  "url": "linear-algebra-a1.html#linear-algebra-a1-4",
  "type": "Figure",
  "number": "6.2.2",
  "title": "",
  "body": " Diagram Of The Problem  Blackboard diagram: vector b projected onto the line through a.  "
},
{
  "id": "linear-algebra-a1-5",
  "level": "2",
  "url": "linear-algebra-a1.html#linear-algebra-a1-5",
  "type": "Figure",
  "number": "6.2.3",
  "title": "",
  "body": " Professor Strang In Action  Professor Strang at Blackboard  "
},
{
  "id": "fig_projection_matrix",
  "level": "2",
  "url": "linear-algebra-a1.html#fig_projection_matrix",
  "type": "Figure",
  "number": "6.2.4",
  "title": "",
  "body": " Projection Matrix Formula  Blackboard: p = a (a^T b)\/(a^T a); the projection is p = Pb with projection matrix P = a a^T \/ (a^T a).  "
},
{
  "id": "linear-algebra-a2",
  "level": "1",
  "url": "linear-algebra-a2.html",
  "type": "Section",
  "number": "6.3",
  "title": "A2",
  "body": " A2   Linear Algebra Exam A2  Let be a subspace of of dimension 2 and let be a fixed non-zero vector in .  Let denote the subset of consisting of all vectors of the form where is in the subspace .  For which vectors is also a subspace? Justify your answer.  [7 marks]   Before grappling this problem it helps to get a picture. I believe this is the best way to approach any problem. (Maybe this is just the old physicist in me). Sometimes it is not possible but not very often.  So lets first look at how SageMath can help us here. Since is a subspace of then it must be a plane passing through the origin; subspaces must contain the vector and pass through the origin.  Take, for example, the plane passing through the origin given by:   Consider the case where our vector is the direction vector starting at position and extending to . This lies on the plane going through the origin and is our subspace .  Let the point be the start of and the point be the endpoint. These points are also the position vectors and and also lie on the plane (since the origin is on the plane). Hence, a normal to the plane is given by the cross-product:   (We could have taken the cross product of any of these three vectors since they are all in the same plane.)  We know that the dot product of the normal with any of our three vectors should be zero. This enables us to use implicit_plot3d() passing in an equation for any point on the plane. We have defined as the function to represent any point on this plane. In the sage cell this is achieved by the following technique:  p = vector([x, y, z]) pA = p - a f(x,y,z) = n.dot_product(pA)  The resultant function is: This confirms our initial equation above.  Now we have all we need to plot the plane. There are several ways of plotting this plane in SageMath. The one adopted here is to use implicit_plot3d() . We pass into this method the above function set equal to zero and the ranges. The next Sage Cell brings this together. Our vector is the yellow arrow, the origin is shown as the black dot in the centre, the plane is drawn in blue.  Now add another vector which is also on the same plane. This is shown as the green arrow. To do this we introduce another point . You might wonder how we know that this point lies on our plane. It was found using the following trick.  f=n[0]*x+n[1]*y+n[2]*z==0 show(f(x=-1,y=2))  Here is the -coordinate of the normal, is the -coordinate, and so on. They are the coefficients of the standard equation of a plane ( ). With is the plane case when the plane passes through the origin. The results are: From this, we can find the -coordinate of which ensure that the point fits onto our plane.  Now for the full picture. Let's find a vector that does not lie in , and shift the whole of by it. The result, , is the red plane: parallel to , but it does not pass through the origin, so it is not a subspace. (Shifting by , which is in , just gives back.)  Try with the point . The green and black arrows show and drawn from .  Evaluating the following SageCell and playing with the resultant plot (zooming in and out and rotating) should convince you of the solution to the problem.     is a subspace if and only if .    If is a subspace of dimension 2 then it is a plane through the origin. If then for direction vectors .  If and then and so is    Hence is also a plane through the origin.  If then which is a plane not through the origin, and so is not a subspace.  (This is hopefully illustrated with the Sage Cell simulation.)    "
},
{
  "id": "exam_a2",
  "level": "2",
  "url": "linear-algebra-a2.html#exam_a2",
  "type": "Example",
  "number": "6.3.1",
  "title": "",
  "body": " Linear Algebra Exam A2  Let be a subspace of of dimension 2 and let be a fixed non-zero vector in .  Let denote the subset of consisting of all vectors of the form where is in the subspace .  For which vectors is also a subspace? Justify your answer.  [7 marks]  "
},
{
  "id": "a2_solution",
  "level": "2",
  "url": "linear-algebra-a2.html#a2_solution",
  "type": "Proposition",
  "number": "6.3.2",
  "title": "",
  "body": "  is a subspace if and only if .    If is a subspace of dimension 2 then it is a plane through the origin. If then for direction vectors .  If and then and so is    Hence is also a plane through the origin.  If then which is a plane not through the origin, and so is not a subspace.  (This is hopefully illustrated with the Sage Cell simulation.)   "
},
{
  "id": "linear-algebra-a3",
  "level": "1",
  "url": "linear-algebra-a3.html",
  "type": "Section",
  "number": "6.4",
  "title": "A3",
  "body": " A3   Linear Algebra Exam A3  Suppose that the non-zero vector is in . Show that is in or is in . Is the condition that necessary?  [7 marks]     If and , then or .    Since there are scalars with If this gives , which we have ruled out, so at least one of is non-zero.  If , divide by it: so .  Otherwise and , and in the same way so .    The condition is necessary. The zero vector lies in every span, so without it we can take , and . Then is the -axis, which does not contain , and is the -axis, which does not contain . Both conclusions fail.  "
},
{
  "id": "exam_a3",
  "level": "2",
  "url": "linear-algebra-a3.html#exam_a3",
  "type": "Example",
  "number": "6.4.1",
  "title": "",
  "body": " Linear Algebra Exam A3  Suppose that the non-zero vector is in . Show that is in or is in . Is the condition that necessary?  [7 marks]  "
},
{
  "id": "a3_solution",
  "level": "2",
  "url": "linear-algebra-a3.html#a3_solution",
  "type": "Proposition",
  "number": "6.4.2",
  "title": "",
  "body": "  If and , then or .    Since there are scalars with If this gives , which we have ruled out, so at least one of is non-zero.  If , divide by it: so .  Otherwise and , and in the same way so .   "
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
  "body": " This book was authored in PreTeXt .  "
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
