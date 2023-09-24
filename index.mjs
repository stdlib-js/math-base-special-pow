// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-odd@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-words@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-set-low-word@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/number-uint32-base-to-int32@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-abs-mask@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-copysign@v0.0.7-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-set-high-word@v0.1.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ldexp@v0.0.8-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-two@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-significand-mask@v0.1.0-esm/index.mjs";var g=[1,1.5],x=[0,.5849624872207642],w=[0,1.350039202129749e-8];var k=1e300,N=1e-300,q=[0,0],y=[0,0];function z(A,B){var C,D,E,F,G,H,I,J,K,L,M,O,P,Q;if(t(A)||t(B))return NaN;if(m.assign(B,q,1,0),G=q[0],0===q[1]){if(0===B)return 1;if(1===B)return A;if(-1===B)return 1/A;if(.5===B)return i(A);if(-.5===B)return 1/i(A);if(2===B)return A*A;if(3===B)return A*A*A;if(4===B)return(A*=A)*A;if(e(B))return function(t,s){return-1===t?(t-t)/(t-t):1===t?1:n(t)<1==(s===a)?0:a}(A,B)}if(m.assign(A,q,1,0),F=q[0],0===q[1]){if(0===F)return function(t,e){return e===f?a:e===a?0:e>0?s(e)?t:0:s(e)?j(a,t):a}(A,B);if(1===A)return 1;if(-1===A&&s(B))return-1;if(e(A))return A===f?z(-0,-B):B<0?0:a}if(A<0&&!1===r(B))return(A-A)/(A-A);if(E=n(A),C=F&l|0,D=G&l|0,I=G>>>31|0,H=(H=F>>>31|0)&&s(B)?-1:1,D>1105199104){if(D>1139802112)return function(t,s){return(h(t)&l)<=1072693247?s<0?1/0:0:s>0?1/0:0}(A,B);if(C<1072693247)return 1===I?H*k*k:H*N*N;if(C>1072693248)return 0===I?H*k*k:H*N*N;M=function(t,s){var e,r,i,n,m,o;return e=(m=1.9259629911266175e-8*(i=s-1)-i*i*(0===(o=i)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((r=d(r=(n=1.4426950216293335*i)+m,0))-n),t[0]=r,t[1]=e,t}(y,E)}else M=function(t,s,e){var r,i,n,m,o,f,a,l,j,u,b,c,k,N,q,y,z,A,B,C,D;return A=0,e<1048576&&(A-=53,e=h(s*=9007199254740992)),A+=(e>>20)-v|0,e=1072693248|(B=1048575&e|0),B<=235662?C=0:B<767610?C=1:(C=0,A+=1,e-=1048576),s=p(s,e),m=d(i=(y=s-(a=g[C]))*(z=1/(s+a)),0),r=524288+(e>>1|536870912),f=p(0,r+=C<<18),q=(n=i*i)*n*(0===(D=n)?.5999999999999946:.5999999999999946+D*(.4285714285785502+D*(.33333332981837743+D*(.272728123808534+D*(.23066074577556175+.20697501780033842*D))))),f=d(f=3+(n=m*m)+(q+=(o=z*(y-m*f-m*(s-(f-a))))*(m+i)),0),k=(b=-7.028461650952758e-9*(j=d(j=(y=m*f)+(z=o*f+(q-(f-3-n))*i),0))+.9617966939259756*(z-(j-y))+w[C])-((c=d(c=(u=.9617967009544373*j)+b+(l=x[C])+(N=A),0))-N-l-u),t[0]=c,t[1]=k,t}(y,E,C);if(O=(L=(B-(J=d(B,0)))*M[0]+B*M[1])+(K=J*M[0]),m.assign(O,q,1,0),P=o(q[0]),Q=o(q[1]),P>=1083179008){if(0!=(P-1083179008|Q))return H*k*k;if(L+8008566259537294e-32>O-K)return H*k*k}else if((P&l)>=1083231232){if(0!=(P-3230714880|Q))return H*N*N;if(L<=O-K)return H*N*N}return O=function(t,s,e){var r,i,n,m,f,a,j,g,x,w;return x=((g=t&l|0)>>20)-v|0,j=0,g>1071644672&&(i=p(0,((j=t+(1048576>>x+1)>>>0)&~(c>>(x=((j&l)>>20)-v|0)))>>>0),j=(j&c|1048576)>>20-x>>>0,t<0&&(j=-j),s-=i),r=(a=(n=.6931471824645996*(i=d(i=e+s,0)))+(m=(e-(i-s))*b+-1.904654299957768e-9*i))-(i=a*a)*(0===(w=i)?.16666666666666602:.16666666666666602+w*(w*(6613756321437934e-20+w*(4.1381367970572385e-8*w-16533902205465252e-22))-.0027777777777015593)),t=h(a=1-(a*r/(r-2)-((f=m-(a-n))+a*f)-a)),t=o(t),(t+=j<<20>>>0)>>20<=0?u(a,j):p(a,t)}(P,K,L),H*O}export{z as default};
//# sourceMappingURL=index.mjs.map
