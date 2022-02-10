## On solutions of a Riemann problem for a chemical flooding model

<div class="r-hstack">
<div class="w-33">
Dan Marchesin
<img src="figs/logo/Dan.png" height=200pt>

Rio de Janeiro, Brasil
<img src="figs/logo/logo-impa.png" height=200pt>
</div>
<div class="w-33">
Bradley J. Plohr
<img src="figs/logo/Brad.png" height=200pt>

Los Alamos, USA
<img src="figs/logo/logo-LosAlamos.png" height=200pt>
</div>
<div class="w-33">
Yulia P. Petrova
<img src="figs/logo/Yulia.png" height=200pt>

Saint-Petersburg, Russia
<img src="figs/logo/logo-spbu.png" height=200pt>
</div>
</div>

=====

## Motivation: Enhanced Oil Recovery (EOR)

We are interested in the mathematical model of oil recovery. Some features:

<ul>
<li class ="fragment">
<em>porous media</em> (averaged models of flow)
</li>
<li class ="fragment">
unknown variables: $s\in[0,1]$ - water saturation, $1 - s$ - oil concentration
</li>
<li class ="fragment">
relatively <em>small speeds</em> ($\approx$ 1 meter per day): Navier-Stokes $\to$ Darcy’s law
</li>
<li class ="fragment">
multiphase flow: oil, water, gas.
</li>
<li class ="fragment">
applications to EOR methods:  thermal, gas, <em>chemical flooding</em>
</li>
</ul>
<img src="figs/reservoir/reservoir_white-en.png" height=300pt>

=====

## Two main directions of investigation

<div class="r-hstack justify-around mt-5" style="width:100%;">
<div class="w-45 m-n5">
    <em> Stable dislacement </em>
<div class="r-stack">
  <ul>
  <li>
     1-dim in spatial variable
  </li>
  </ul>
</div>
</div>
<div class="w-5 m-n5">
    <em> Unstable displacement </em>
<div class="r-stack">
  <ul>
  <li>
    2-dim (or 3-dim)
  </li>
  </ul>
</div>
</div>
</div>

<div class="r-hstack" style="width:100%;">
<div class="w-33" style="width:100%;">
<video data-autoplay src="figs/reservoir/nofingers-inv2.mp4" style="width:80%;"></video>
<!--
  <img alt class="img-fluid w-100" style="margin: 0;" src="figs/solution_riemann_problem/polymer_RP_xt_pt.png">
-->
</div>
<div class="w-10" style="width:20%;">
</div>
<div class="w-33" style="width:100%;">
<video data-autoplay src="figs/reservoir/fingers-rect3100k-quadratic-m20-2.mp4" style="width:80%;"></video>
<!--
<img alt class="img-fluid w-100" style="margin: 0;" src="figs/reservoir/fingers-rect3100k-quadratic-m20"></div>
-->
</div>
</div>

<div class="r-hstack justify-around mt-5" style="width:100%;">
<div class="w-45 m-n5">
  <ul>
  <li>
    main question: find an exact solution for a Riemann problem
  </li>
  <li> hyperbolic conservation laws
  </li>
  </ul>
</div>
<div class="w-5 m-n5">
  <ul>
  <li>
    source of instability: water and oil/polymer have different viscosities
  </li>
  <li>
    viscous fingering phenomenon
  </li>
  </ul>
</div>
</div>

<div class="r-hstack justify-around mt-5" style="width:100%;">
<div class="w-45 m-n5">
  \begin{aligned}
  s_t + f(s,c)_x &amp; = 0, \\
  (cs)_t + (cf(s,c))_x &amp; = 0.
  \end{aligned}
</div>
<div class="w-5 m-n5">
  \[\begin{aligned}
  c_t + u\cdot \nabla c &amp; = \varepsilon \Delta c \\
  \text{div}(u) &amp; = 0,\quad
  u =-\frac{1}{\mu(c)}\nabla p
  \end{aligned} \]
</div>
</div>

<div class="r-hstack justify-around mt-5" style="width:100%;">
<div class="w-45 m-n5">
Example: chemical flooding model
</div>
<div class="w-5 m-n5">
Example: Peaceman model
</div>
</div>


=====


## Preview of results

We will consider a chemical flooding model (1980' E. Isaacson)

\begin{aligned}
  s_t + f(s,c)_x &amp; = 0, \\\\
  (cs)_t + (cf(s,c))_x &amp; = 0.
\end{aligned}

* contact discontinuities $\Rightarrow$ non-uniqueness of solutions to a Riemann problem
* vanishing viscosity criterion doesn't help
* ad hoc criterion (Isaacson-Glimm) needs to be justified

*Main idea*: add small physical effect (chemical's adsorption on the rock, $\alpha$ small) 

\begin{aligned}
  s_t + f(s,c)_x &amp; = 0, \\\\
  (cs+\alpha a(c))_t + (cf(s,c))_x &amp; = 0.
\end{aligned}

*Vanishing adsorption criterion*: the admissible contacts for $M_0$ are the limits of a family of admissible solutions for $M_\alpha$ as $\alpha\to0$.


=====

## Hyperbolic systems of conservation laws

$$
  G(U)_t + F(U)_x = 0
$$

* $G(U)$ is the *accumulation function* (conserved quantities)
* $F(U)$ is the *flux function* (the flow of conserved quantities)

Simplest example: the *wave equation*
  $$
    y_{tt} - c^2\\,y_{xx} = 0 \qquad \text{(J. d'Alembert, 1747)}
  $$
  can be written as a system of two first-order equations on the state vector $U= (y_x \quad y_t )^T$
  $$
    U_t + A\\,U_x = 0 \quad \text{with} \quad
    A := \begin{pmatrix} 0 & -1 \\\\ -c^2 & 0 \end{pmatrix}
  $$

* the eigenvalues $\lambda_1 = -c$, $\lambda_2 = +c$ of $A$ are *real*,
  the system is *hyperbolic*.  Solutions contain 2 *wave modes* propagating
  at the *velocities* $\lambda_1$ and $\lambda_2$

<!--* *initial-value problem*: $\\ $
  specify $U(x, 0) = U_0(x)$ and seek $U(x, t)$ for $t > 0$
-->

=====

## Evolution of displacement
<div class="r-hstack justify-around mt-5" style="width:100%;">
<div class="w-45 m-n5">
`figs/displ_pos.html`{.include}
</div>
<div class="w-45 m-n5">
<img src="figs/spacetime.png" height=300pt>
</div>
</div>

<div class="r-hstack justify-around mt-5" style="width:100%;">
<div class="w-33 m-n5">
`figs/strain_pos.html`{.include}
</div>
<div class="w-33 m-n5">
`figs/vel_pos.html`{.include}
</div>
<div class="w-33 m-n5">
`figs/vel_strain.html`{.include}
</div>
</div>

=====

## Hyperbolic equations: $\\ $ Non-linear scalar equation
* *inviscid Burgers' equation* (1948)
  $$
    u_t + \left(\tfrac12 u^2\right)_x = 0
  $$
* non-linearity implies *wave speed* $\lambda(u) = u$ *depends on the state* $u$
* therefore waves can spread (*rarefaction wave*) or focus (*shock wave*)
* *Buckley-Leverett model* for two-phase (water/oil) flow in a porous medium

<div class="r-hstack justify-around mt-5 fragment"  style="width:100%;">
<div class="w-45 m-n5">
`figs/raref.html`{.include}
</div>
<div class="w-5 m-n5">
<img src="figs/raref-spacetime.png" height=300pt>
</div>
</div>


=====

## Hyperbolic equations: $\\ $ Non-linear scalar equation
* *inviscid Burgers' equation* (1948)
  $$
    u_t + \left(\tfrac12 u^2\right)_x = 0
  $$
* non-linearity implies *wave speed* $\lambda(u) = u$ *depends on the state* $u$
* therefore waves can spread (*rarefaction wave*) or focus (*shock wave*)
* *Buckley-Leverett model* for two-phase (water/oil) flow in a porous medium

<div class="r-hstack justify-around mt-5"  style="width:100%;">
<div class="w-45 m-n5">
`figs/focus.html`{.include}
</div>
<div class="w-5 m-n5">
<img src="figs/focus-spacetime.png" height=300pt>
</div>
</div>


=====

## Gas dynamics: $\\ $ Prototype system of conservation laws

* gas state $U$ comprises the *density*, *velocity*, and *specific energy*

* physical content of equations: $\\ $ *conservation of mass, momentum, and energy*

* 3 wave modes:

    - left and right-facing nonlinear sonic modes
      (*shock* and *rarefaction waves*)

    - *contact mode* (e.g., a cold front on a weather map)

        + pressure and velocity do not jump, but temperature can

        + wave neither focuses nor spreads

=====

## Riemann's work (1858)

* Riemann solved the initial-value problem with data having a single jump
$$
U(x,0) = U_L, x<0; \quad  \quad 
U(x,0) = U_R, x>0
$$

* took advantage of the scale invariance
  of the equations and the data:
  $$
    U(\alpha\\,x, \alpha\\,t) = U(x, t) \quad \text{for all $\alpha > 0$}
  $$

* solution to a Riemann problem is important because:

   - it appears in a *long-term behavoir* of Cauchy problem
   - helps to prove the existence of solutions to Cauchy problem (Glimm's method, random choice method)
   - helps to construct numerical solution (Godunov method)

=====

## Shock waves: RH condition and admissibility criteria

* discontinuous solutions are defined in the sense of distributions (*weak form*)

* for a shock wave from $U_-$ to $U_+$ moving with velocity $\sigma$,
  the weak condition amounts to the following *Rankine-Hugoniot condition*
  $$
    \\ - \sigma\\,G(U_-) + F(U_-) = - \sigma\\,G(U_+) + F(U_+)
  $$

* RH means *conservation*: $\\ $ what flows into left side
  flows out of the right side

* *Problems* from the perspectives of both mathematics and physics:

  - if all RH solutions are allowed, a Riemann problem has multiple solutions
  - some RH solutions violate physical principles

* *vanishing viscosity criterion*: consider a diffusive system of conservation laws
  $$
    G(U)_t + F(U)_x = \epsilon \left[B(U)\\,U_x\right]_x
  $$

=====

## Traveling wave solutions of the diffusive system (Hopf, 1948)

* $U(x, t) = \hat U(\xi)$ with $\xi := x - \sigma\\,t$
  for fixed *shock velocity* $\sigma$

* reduction to first-order system of ordinary differential equations:
$$
  \epsilon\\,B(\hat U)\\,\hat U_\xi
  = - \sigma \left[G(\hat U) - G(U_-)\right] + F(\hat U) - F(U_-)
$$

* $U_-$ and $U_+$ are fixed points and we look for an orbit connecting them
$$
\hat U(-\infty) = U_-,\qquad \hat U(+\infty) = U_+
$$

* diffusive terms cause a shock wave to have
  a *thin, smooth internal structure*
  in which nonlinear focusing balances diffusive spreading

* traveling wave solution *approaches* the jump discontinuity
  in $L^1$ as $\epsilon \to 0^+$

=====

## Diffusive terms are not a panacea

* Contact discontinuities do not have diffusive profiles
  (there is no nonlinear focusing to balance diffusive spreading)

* equilibria are not isolated:
$$
 \\,- \sigma \left[G(\hat U) - G(U_-)\right] + F(\hat U) - F(U_-)
$$
vanishes all along the contact curve

* Ad hoc admissibility criteria need to be justified

=====

## Questions?  Comments?

=====


## Glimm-Isaacson model (KKIT model)

Two-phase oil-water flow with *polymer* in the water to increase its viscosity
<div class="r-hstack my-0  mt-5" style="width:100%;">
<div class="w-65 my-0  m-n5">
\begin{align}
  s_t + f(s,c)_x &amp; = 0 \\
  (cs)_t + (cf(s,c))_x &amp; = 0 \\
\end{align}

* $s\in[0,1]$ - water saturation
* $c\in[0,1]$ - polymer concentration  
* $f$ - fractional flow function: affected by polymer
  * $S$-shaped in $s$
  * $f$ is monotone in $c$

</div>
<div class="w-35">
<img class="w-100" src="figs/fracflowfunc_en.svg">
</div>
</div>

Initial data:
\begin{align}
(s,c)\bigr\rvert_{t=0}=
\begin{cases}
(s_L,c_L),&\text{if }x\leqslant0,
\\\\
(s_R,c_R),& \text{if }x\geqslant0.
\end{cases}
\end{align}

*Question*: find a solution to initial value problem

=====

## Characteristic families: s and c-waves
\begin{align}
  s_t + f(s,c)_x &amp; = 0 \\\\
  (cs)_t + (cf(s,c))_x &amp; = 0 
\end{align}


\begin{aligned}
\begin{pmatrix}
1&0
\\\\
c&s
\end{pmatrix}
\begin{pmatrix}
s
\\\\
c
\end{pmatrix}_t
+
\begin{pmatrix}
f_s&f_c
\\\\
f_s&f+cf_c
\end{pmatrix}
\begin{pmatrix}
s
\\\\
c
\end{pmatrix}_x=0
\end{aligned}
<!--
\begin{aligned}
DG(U)  U_t + DF(U) U_x=0.
\end{aligned}
-->

Hence
\begin{aligned}
\begin{pmatrix}
s
\\\\
c
\end{pmatrix}_t
+
\begin{pmatrix}
f_s&f_c
\\\\
0&\frac{f}{s}
\end{pmatrix}
\begin{pmatrix}
s
\\\\
c
\end{pmatrix}_x=0
\end{aligned}



Characteristic speeds: $\qquad\lambda^{(s)}=f_s\qquad$ and $\qquad\lambda^{(c)}=f/s$.

Eigenvectors: 
\begin{equation}
\qquad r^{(s)} := \begin{pmatrix} 1 \\\\ 0 \end{pmatrix}
\qquad \text{and} \qquad
r^{(c)} := \begin{pmatrix} -f_c \\\\ \lambda^{(s)} - \lambda^{(c)} \end{pmatrix}.
\end{equation}



=====


## Characteristic families: s and c-waves

<div class="r-hstack justify-around mt-5" style="width:100%;">
<div class="w-45 m-n5">
    <em> s-waves </em>
<div class="r-stack">
    <ul>
    <li>
	  $\lambda^{(s)} = f_s$
    </li>
    <li>
	  solve the Buckley-Leverett equation $c=const$</li>
    <li>
	  Riemann invariant $c=const$</li>
    </ul>
</div>
<div class="r-stack">
<img src="figs/s_c_waves/s-waves.svg" height=300pt>
</div>
</div>
<div class="w-45 m-n5">
    <em>c-waves </em>
<div class="r-stack">
    <ul>
    <li>
	  $\lambda^{(c)} = f/s$
    </li>
    <li>
	  are contact discontinuities (linearly degenerate field)
    </li>
    <li>
	  Riemann invariant $f/s=const$</li>
    </ul>
</div>
<div class="r-stack">
<img src="figs/s_c_waves/c-waves.svg" height=300pt>
</div>
</div>
</div>

For both families the *rarefaction and shock curves coincide*! But in a different way...

=====

## Interesting facts

<strong>Fact 1</strong>: The only way a system of conservation laws can reduce to a linear scalar equation is when the wave curves are level curves of an eigenvalue

<strong>Fact 2</strong>: The only way a system of conservation laws can reduce to a nonlinear scalar equation is when the shock and rarefaction curves coincide.  And this can only happen when the wave curves are straight lines in the plane of conserved quantities.


=====

## Non-strictly hyperbolic system

<img src="figs/coincidence/polymer_coincidence_only.png" height=300pt>

The coordinate system of wave curves is singular and wave speeds coincide on a co-dimension one curve (coincidence locus)
$$
\lambda^{(s)}=f_s=\frac{f}{s}=\lambda^{(c)}
$$
$s$ and $c$-waves are tangent on this line. ToDo: add figure with both s and c-families being tangent.

=====

## Riemann solutions: wave curve approach

* constant states $u_L$, $u_M$, $u_R$
* *wave groups* $\color{dodgerblue}{w_{\text{slow}}}$ and $\color{red}{w_{\text{fast}}}$:

$$
u_L \xrightarrow{w_{\text{slow}}} u_M \xrightarrow{w_{\text{fast}}} u_R
$$

* for fixed $u_L$ the set of admissible slow wave groups forms a *slow wave curve* in state space
* for fixed $u_R$ the set of admissible fast wave groups forms a *fast wave curve* in state space
* $u_M$ is any *intersection* of the slow and fast wave curves

<div class="r-hstack">
<div class="w-25">
<img src="figs/wave_groups_xt/slow_wave_curve_en.svg">
</div>
<div class="w-25">
<img src="figs/wave_groups_xt/fast_wave_curve_en.svg">
</div>
<div class="w-25">
<img src="figs/wave_groups_xt/overcomp_wave_curve_en.svg">
</div>
<div class="w-25">
<img src="figs/wave_groups_xt/transitional_wave_curve_en.svg">
</div>
</div>

=====

## Types of contact discontinuities

<div class="r-hstack">
<div class="w-25">
<img src="figs/s_c_waves/slow_contact_en.svg">
</div>
<div class="w-25">
<img src="figs/s_c_waves/fast_contact_en.svg">
</div>
<div class="w-25">
<img src="figs/s_c_waves/overcompressive_contact_en.svg">
</div>
<div class="w-25">
<img src="figs/s_c_waves/transitional_contact_en.svg">
</div>
</div>

We will call a contact discontinuity from $U_-$ to $U_+$ with speed $\sigma$
* *slow* $\quad$ if $\qquad\qquad\quad\small\quad\lambda_{2}(U_-)>\lambda_{1}(U_-)=\sigma=\lambda_{1}(U_+)<\lambda_{2}(U_+);$

* *fast* $\quad$  if $\qquad\qquad\quad\small\quad \lambda_{1}(U_-)<\lambda_{2}(U_-)=\sigma=\lambda_{2}(U_+)>\lambda_{1}(U_+);$

* *overcompressive* $\quad$ if  $\small\quad\lambda_{2}(U_-)>\lambda_{1}(U_-)=\sigma=\lambda_{2}(U_+)>\lambda_{1}(U_+);$

* *undercompressive* $\quad$  if $\small\quad\lambda_{1}(U_-)<\lambda_{2}(U_-)=\sigma=\lambda_{1}(U_+)<\lambda_{2}(U_+).$

Undercompressive waves are also called transitional.


=====

## Non-uniqueness of solutions

![polymer_RP_multiple](figs/solution_riemann_problem/polymer_RP_multiple_en.png)

ToDo: change colors according to types + add figure of solution $s(x/t)$ and $c(x,t)$

* ad hoc *admissibility criterion* of E. Isaacson and J. Glimm: $\\ $
  a contact discontinuity is admissible if and only if
  its left and right states lie on the same side of the coincidence locus

* *consequence*: $\\ $ existence and uniqueness of solutions
  for all Riemann problems


=====

## General admissibility criterion

* a model $M_0$
* a parameterized family of models $M_\alpha$ with its own admissibility criterion

*Definiton*: a solution for $M_0$ is admissible provided it is the $L^1_{loc}$ limit of a family of admissible solutions of $M_\alpha$ as $\alpha\to 0$.

For instance, a solution of $M_\alpha$ could be any wave group:  a shock, rarefaction, or composite, or more general wave group that is admissible for $M_\alpha$. 

Example: chemical flooding model $M_\alpha$, *vanishing adsorption criterion*.

\begin{aligned}
  s_t + f(s,c)_x &amp; = 0, \\\\
  (cs+\alpha a(c))_t + (cf(s,c))_x &amp; = 0.
\end{aligned}

* if adsorption depends nonlinearly on the concentration,
  then *contact discontinuities become rarefactions and shock waves*
* For moderate values of $c$ we have $a''(c)\le 0$. When $a''\equiv 0$, $c$-waves are contacts.

=====

## Main Result

<img src="figs/s_c_waves/Slow-overcompressive.svg" height=300pt>
<img src="figs/s_c_waves/Fast-transitional.svg" height=300pt>

* *Isaacson-Glimm criterion*: slow and fast contact discontinuities are admissible, overcompressive and undercompressive  - not.
* *Vanishing adsorption criterion*: slow, fast and overcompressive contact discontinuities are admissible, undercompressive - not.

P.S. Overcompressive contacts can be represented as a sequence of two waves (s and c), thus their admissibility doesn't affect the existence and uniqueness of the Riemann problem solution


=====

## Proof sketch

ToDo: figure for slow contacts

ToDo: figure for transitional contacts

=====

## Questions? Comments?


=====

## Non-monotone chemical flooding model

Two-phase oil-water flow with *surfactant* in the water 
<div class="r-hstack my-0  mt-5" style="width:100%;">
<div class="w-65 my-0  m-n5">
\begin{align}
  s_t + f(s,c)_x &amp; = 0 \\
  (cs)_t + (cf(s,c))_x &amp; = 0 \\
\end{align}

* $s\in[0,1]$ - water saturation
* $c\in[0,1]$ - surfactant concentration  
* $f$ - fractional flow function: affected by surfactant
  * $S$-shaped in $s$
  * *$f$ changes its monotonicity in $c$ once*

</div>
<div class="w-35">
<img class="w-100" src="figs/fracflowfunc_en.svg">
</div>
</div>

Initial data:
\begin{align}
(s,c)\bigr\rvert_{t=0}=
\begin{cases}
(s_L,c_L),&\text{if }x\leqslant0,
\\\\
(s_R,c_R),& \text{if }x\geqslant0.
\end{cases}
\end{align}

*Question*: find an exact solution to the initial value problem.

=====

## There exist admissible transitional contacts!

* Work in progress

* Add figure of contacts and their types

* Consider a diffusive system with adsorption + formulate a theorem about saddle-to-saddle conection

* Consequence: there exist transitional shocks (and transitional contacts as a limit too!)

=====

## Thank you for your attention!

<!--* 
* Asymptotic stability as $t\to\infty$: 
   are the travelling wave solutions stable in the sense that any solution of a Cauchy problem for the dissipative system with the correct values at $\pm\infty$ tends to the admissible travelling wave as $t\to+\infty$?-->

<img src="figs/logo/ICM.png" height=150pt>

</div>

=====

## Additional slides

=====

## Shocks types

<div class="r-hstack">
<div class="w-25">
<img src="figs/s_c_waves/slow_shock_en.svg">
</div>
<div class="w-25">
<img src="figs/s_c_waves/fast_shock_en.svg">
</div>
<div class="w-25">
<img src="figs/s_c_waves/overcompressive_shock_en.svg">
</div>
<div class="w-25">
<img src="figs/s_c_waves/transitional_shock_en.svg">
</div>
</div>

A shock from $U_-$ to $U_+$ with speed $\sigma$ is called
* *slow* $\quad$ if $\quad\qquad\qquad\small\quad\lambda_{1}(U_-)>\sigma>\lambda_{1}(U_+)\quad$ and $\small\quad\sigma<\lambda_{2}(U_-), \lambda_{2}(U_+)$;
* *fast* $\quad$  if   $\quad\qquad\qquad\small\quad\lambda_{2}(U_-)>\sigma>\lambda_{2}(U_+)\quad$ and $\small\quad\sigma>\lambda_{1}(U_-), \lambda_{1}(U_+)$;
* *overcompressive* $\quad$ if  $\quad\small\quad\sigma>\lambda_{2}(U_+), \lambda_{1}(U_+)\quad$ and $\small\quad\sigma<\lambda_{1}(U_-), \lambda_{2}(U_-)$;
* *undercompressive* $\quad$  if $\quad\small\sigma<\lambda_{1}(U_-),\lambda_{1}(U_+)\quad$ and $\small\quad\sigma>\lambda_{2}(U_-), \lambda_{2}(U_+)$.

Undercompressive waves are also called transitional. 

Fast and slow are also called *Lax shocks* (classical).


