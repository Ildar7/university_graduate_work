!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const n = (new Error()).stack; n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = '209ca368-abcc-43fd-96ab-9893b35e1820', e._sentryDebugIdIdentifier = 'sentry-dbid-209ca368-abcc-43fd-96ab-9893b35e1820'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[5976], {
    8683: (e, n, t) => { t.d(n, { Z: () => i }); let a; let l; const r = t(7294); function o() { return o = Object.assign ? Object.assign.bind() : function (e) { for (let n = 1; n < arguments.length; n++) { const t = arguments[n]; for (const a in t)Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); } return e; }, o.apply(this, arguments); } const i = function (e) { return r.createElement('svg', o({ width: 20, height: 20, xmlns: 'http://www.w3.org/2000/svg' }, e), a || (a = r.createElement('path', { d: 'M5.84 10a.625.625 0 0 1 .624-.625h2.911v-2.91a.625.625 0 0 1 1.25 0v2.91h2.911a.625.625 0 1 1 0 1.25h-2.91v2.91a.625.625 0 0 1-1.25 0v-2.91H6.463A.625.625 0 0 1 5.84 10Z' })), l || (l = r.createElement('path', { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M6.097 3.14a35.418 35.418 0 0 1 7.805 0 3.32 3.32 0 0 1 2.93 2.9c.309 2.632.309 5.29 0 7.92a3.323 3.323 0 0 1-2.93 2.9 35.41 35.41 0 0 1-7.805 0 3.321 3.321 0 0 1-2.93-2.9 34.085 34.085 0 0 1 0-7.92 3.321 3.321 0 0 1 2.93-2.9Zm7.667 1.243a34.168 34.168 0 0 0-7.528 0 2.072 2.072 0 0 0-1.828 1.804 32.835 32.835 0 0 0 0 7.628 2.072 2.072 0 0 0 1.828 1.803c2.48.277 5.047.277 7.528 0a2.072 2.072 0 0 0 1.827-1.803 32.832 32.832 0 0 0 0-7.628 2.071 2.071 0 0 0-1.827-1.803' }))); }; },
    9751: (e, n, t) => {
        t.r(n), t.d(n, { default: () => W }); const a = t(5893); const l = t(9649); const r = t(7294); const o = t(5306); const i = t(9741); const u = t(1150); const c = t(6458); const s = t(7730); const d = t(7168); const f = function (e) { let n; return (n = e.addStudentGroup) === null || void 0 === n ? void 0 : n.data; }; const p = function (e) { let n; return (n = e.addStudentGroup) === null || void 0 === n ? void 0 : n.errors; }; const v = (0, d.hg)('students/addStudentGroupGroup', ((e, n) => {
            return t = void 0, a = void 0, r = function () {
                let e; let t; let a; let l; let r; let o; let u; return (function (e, n) {
                    let t; let a; let l; let r; let o = {
                        label: 0, sent() { if (1 & l[0]) throw l[1]; return l[1]; }, trys: [], ops: [],
                    }; return r = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function i(i) { return function (u) { return (function (i) { if (t) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, i[0] && (o = 0)), o;) try { if (t = 1, a && (l = 2 & i[0] ? a.return : i[0] ? a.throw || ((l = a.return) && l.call(a), 0) : a.next) && !(l = l.call(a, i[1])).done) return l; switch (a = 0, l && (i = [2 & i[0], l.value]), i[0]) { case 0: case 1: l = i; break; case 4: return o.label++, { value: i[1], done: !1 }; case 5: o.label++, a = i[1], i = [0]; continue; case 7: i = o.ops.pop(), o.trys.pop(); continue; default: if (!((l = (l = o.trys).length > 0 && l[l.length - 1]) || i[0] !== 6 && i[0] !== 2)) { o = 0; continue; } if (i[0] === 3 && (!l || i[1] > l[0] && i[1] < l[3])) { o.label = i[1]; break; } if (i[0] === 6 && o.label < l[1]) { o.label = l[1], l = i; break; } if (l && o.label < l[2]) { o.label = l[2], o.ops.push(i); break; }l[2] && o.ops.pop(), o.trys.pop(); continue; }i = n.call(e, o); } catch (e) { i = [6, e], a = 0; } finally { t = l = 0; } if (5 & i[0]) throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 }; }([i, u])); }; }
                }(this, ((c) => { switch (c.label) { case 0: e = n.rejectWithValue, t = n.extra, a = n.dispatch, l = n.getState, r = f(l()), c.label = 1; case 1: return c.trys.push([1, 3,, 4]), [4, t.api.post('/college/groups/', r)]; case 2: return o = c.sent(), a((0, i.or)()), a(m.clearData()), [2, o.data]; case 3: return u = c.sent(), [2, e({ errors: u.response.data.errors, status: u.response.status })]; case 4: return [2]; } })));
            }, new ((l = void 0) || (l = Promise))(((e, n) => { function o(e) { try { u(r.next(e)); } catch (e) { n(e); } } function i(e) { try { u(r.throw(e)); } catch (e) { n(e); } } function u(n) { let t; n.done ? e(n.value) : (t = n.value, t instanceof l ? t : new l(((e) => { e(t); }))).then(o, i); }u((r = r.apply(t, a || [])).next()); })); let t; let a; let l; let r;
        })); let h = function () { return h = Object.assign || function (e) { for (var n, t = 1, a = arguments.length; t < a; t++) for (const l in n = arguments[t])Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]); return e; }, h.apply(this, arguments); }; const b = {
            data: {
                short_name: null, course: null, enrollment_year: null, id_education_base: null, id_language: null, name: null, id_specialty: null, is_full_time: null, qualifications: null, serial_number: null, study_duration: null,
            },
            isLoading: !1,
            errors: void 0,
        }; const g = (0, d.oM)({
            name: 'addStudentGroups',
            initialState: b,
            reducers: {
                setInputData(e, n) { let t; let a; n.payload[1] ? e.data = { ...e.data, ...((a = {})[n.payload[0]] = n.payload[1], a) } : e.data = { ...e.data, ...((t = {})[n.payload[0]] = null, t) }; }, changeEducationBaseId(e, n) { e.data.id_education_base = n.payload; }, changeFullTimeEducation(e, n) { e.data.is_full_time = n.payload; }, changeSpecialty(e, n) { e.data.id_specialty = n.payload; }, changeQualifications(e, n) { e.data.qualifications = n.payload; }, changeSerialNumber(e, n) { e.data.serial_number = n.payload; }, changeLanguage(e, n) { e.data.id_language = n.payload; }, clearData(e) { e.data = b.data, e.errors = void 0; },
            },
            extraReducers(e) { e.addCase(v.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(v.fulfilled, ((e) => { e.isLoading = !1; })).addCase(v.rejected, ((e, n) => { e.isLoading = !1, e.errors = n.payload; })); },
        }); var m = g.actions; const y = g.reducer; const _ = t(4387); const x = t(4475); const w = t(4809); const S = t(1138); const j = t(5461); const k = t(530); const C = t(9161); const O = t(6826); const N = t(6925); const E = t(100); const D = t(238); const I = t(6959); const A = t(7882); const V = t(5321); const L = t(1759); const M = t(1353); const R = t(9456); const q = t(8683); const F = t(6088); const G = t(9884); const B = 'pqV6wvQ2'; let T = function () { return T = Object.assign || function (e) { for (var n, t = 1, a = arguments.length; t < a; t++) for (const l in n = arguments[t])Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]); return e; }, T.apply(this, arguments); }; const P = function (e, n, t) { if (t || arguments.length === 2) for (var a, l = 0, r = n.length; l < r; l++)!a && l in n || (a || (a = Array.prototype.slice.call(n, 0, l)), a[l] = n[l]); return e.concat(a || Array.prototype.slice.call(n)); }; const Y = function (e) {
            let n; const t = e.className; const l = e.isOpen; const o = e.setVisible; const i = (0, r.useState)(); const u = i[0]; const s = i[1]; const d = (0, r.useRef)(null); const h = (0, r.useState)(!1); const b = h[0]; const g = h[1]; const y = (0, r.useState)([]); const Y = y[0]; const K = y[1]; const Z = (0, r.useState)('null'); const H = Z[0]; const z = Z[1]; const Q = (0, r.useState)('null'); const J = Q[0]; const U = Q[1]; const X = (0, r.useState)('null'); const W = X[0]; const $ = X[1]; const ee = (0, r.useState)('null'); const ne = ee[0]; const te = ee[1]; const ae = (0, r.useState)([]); const le = ae[0]; const re = ae[1]; const oe = (0, r.useState)(''); const ie = oe[0]; const ue = oe[1]; const ce = (0, r.useMemo)((() => ['1', '2', '3', '4']), []); const se = (0, r.useMemo)((() => ['очная', 'заочная']), []); const de = (0, j.T)(); const fe = (0, c.v9)(f); const pe = (0, c.v9)(p); const ve = (0, c.v9)(I.K2); const he = (0, c.v9)(I.LD); const be = (0, c.v9)(I.qA); const ge = (0, c.v9)(A._c); const me = (0, c.v9)(A.Aq); const ye = (0, c.v9)(A.kp); const _e = (0, c.v9)(V.KP); const xe = (0, c.v9)(V.Rr); const we = (0, c.v9)(V.d3); const Se = (0, c.v9)(F.Y9); const je = (0, c.v9)(F.sE); const ke = (0, c.v9)(F.Pn); const Ce = he || me || xe || je || !!be || !!ye || !!we || !!ke; const Oe = (0, r.useMemo)((() => (ve == null ? void 0 : ve.data.map(((e) => ''.concat(e.shifr_spec, ' - ').concat(e.speciality))))), [ve]); const Ne = (0, r.useMemo)((() => (ge == null ? void 0 : ge.data.filter(((e) => e.specialty_id === (fe == null ? void 0 : fe.id_specialty))))), [fe == null ? void 0 : fe.id_specialty, ge == null ? void 0 : ge.data]); const Ee = (0, r.useMemo)((() => (_e == null ? void 0 : _e.map(((e) => ''.concat(e.short_name))))), [_e]); const De = (0, r.useMemo)((() => (Se == null ? void 0 : Se.map(((e) => ''.concat(e.language))))), [Se]); const Ie = function (e, n) { de(m.setInputData([n, e.target.value])); }; const Ae = (0, r.useCallback)(((e, n) => { de(m.setInputData([n, Number(e)])); }), [de]); const Ve = (0, r.useCallback)(((e, n) => { $(e), re([]), de(m.changeQualifications(null)); const t = ve == null ? void 0 : ve.data.filter(((n) => ''.concat(n.shifr_spec, ' - ').concat(n.speciality) === e))[0]; de(m.changeSpecialty((t == null ? void 0 : t.id_spec) || null)); }), [de, ve == null ? void 0 : ve.data]); const Le = (0, r.useCallback)(((e, n) => { let t = []; if (le.filter(((n) => n === e))[0]) { const a = le.filter(((n) => n !== e)); re(a), t = a; } else re(((n) => P(P([], n, !0), [e], !1))), t = P(P([], le, !0), [e], !1); const l = []; t.forEach(((e) => { ge == null || ge.data.forEach(((n) => { e === n.qualification && l.push(n.id_qual); })); })), de(m.changeQualifications(l)); }), [de, ge == null ? void 0 : ge.data, le]); const Me = (0, r.useCallback)(((e, n) => { z(e); const t = _e == null ? void 0 : _e.filter(((n) => n.short_name === e))[0]; de(m.changeEducationBaseId((t == null ? void 0 : t.id_education_bases) || null)); }), [de, _e]); const Re = (0, r.useCallback)(((e, n) => { U(e), de(m.changeFullTimeEducation(e.toLowerCase() === 'очная')); }), [de]); const qe = (0, r.useCallback)(((e, n) => { te(e); const t = Se == null ? void 0 : Se.filter(((n) => n.language === e))[0]; de(m.changeLanguage((t == null ? void 0 : t.id_languages) || null)); }), [de, Se]); const Fe = (0, r.useCallback)((() => { o(!1); }), [o]); const Ge = (0, r.useCallback)((() => { Fe(), U('null'), z('null'), $('null'), te('null'), re([]), de(m.clearData()); }), [de, Fe]); return (0, r.useEffect)((() => { for (var e = [], n = (new Date()).getFullYear(); n >= 2e3; n--)e.push(''.concat(n)); K(e); }), []), (0, r.useEffect)((() => { de(L.f$.setSort('id_spec')), de((0, I.kY)()), de(L.f$.setSort('id_qual')), de((0, A.cs)()), de((0, V.xe)()), de((0, F.px)()); }), [de]), (0, r.useEffect)((() => { if ((fe == null ? void 0 : fe.enrollment_year) && fe.short_name && fe.course && fe.serial_number) { const e = (0, G.d)(fe.enrollment_year, fe.short_name, fe.course, fe.serial_number); ue(e); } else ue('Заполните все данные'); }), [fe == null ? void 0 : fe.course, fe == null ? void 0 : fe.enrollment_year, fe == null ? void 0 : fe.serial_number, fe == null ? void 0 : fe.short_name]), (0, r.useEffect)((() => { if (pe) { const e = pe.errors; e.length && e.forEach(((e) => { s(k.F.error(e.msg)); })); } }), [pe]), n = he || me || xe || je ? (0, a.jsx)(S.O, { width: '100%', height: 500 }) : be || ye || we || ke ? (0, a.jsx)(w.xv, {
                theme: w.lg.ERROR, size: w.yH.M, weight: w.fs.SEMIBOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(N.I, { placeholder: 'Название', value: (fe == null ? void 0 : fe.name) || '', onChange(e) { Ie(e, 'name'); } }), (0, a.jsx)(E.u, {
                    label: 'Специальность', options: Oe, columnName: 'id_specialty', optionValue: W, onClickOption: Ve, searchDisabled: !0,
                }), (0, a.jsx)(E.u, {
                    label: 'Квалификации', options: (Ne == null ? void 0 : Ne.map(((e) => e.qualification))) || [], columnName: 'qualifications', optionValue: le, onClickOption: Le, multiSelect: !0, disabled: !(fe == null ? void 0 : fe.id_specialty),
                }), (0, a.jsx)(E.u, {
                    label: 'Год поступления', options: Y, columnName: 'enrollment_year', optionValue: String(fe == null ? void 0 : fe.enrollment_year) || '', onClickOption: Ae, searchDisabled: !0,
                }), (0, a.jsx)(E.u, {
                    label: 'Продолжительность обучения', options: ce, columnName: 'study_duration', optionValue: String(fe == null ? void 0 : fe.study_duration) || '', onClickOption: Ae, searchDisabled: !0,
                }), (0, a.jsx)(N.I, {
                    label: 'Короткое имя', placeholder: 'ГГ', value: (fe == null ? void 0 : fe.short_name) || '', maxLength: 3, onChange(e) { Ie(e, 'short_name'); },
                }), (0, a.jsx)(E.u, {
                    label: 'Курс', options: ce, columnName: 'course', optionValue: String(fe == null ? void 0 : fe.course) || '', onClickOption: Ae, searchDisabled: !0,
                }), (0, a.jsx)(N.I, {
                    label: 'Порядковый номер', placeholder: '7', type: 'number', min: 1, max: 9, value: (fe == null ? void 0 : fe.serial_number) || '', onChange(e) { if (!e.target.value.includes('.')) return Number(e.target.value) < 0 ? (s(k.F.error('Допустимы только положительные числа!')), void de(m.changeSerialNumber(Number(e.target.value[1])))) : Number(e.target.value) > 9 ? (s(k.F.error('Порядковый номер не может быть двузначным числом!')), void de(m.changeSerialNumber(Number(e.target.value[0])))) : void de(m.changeSerialNumber(Number(e.target.value) || null)); s(k.F.error('Только целые числа!')); },
                }), (0, a.jsx)(N.I, {
                    placeholder: 'Код', value: ie, label: 'Код группы', disabled: !0,
                }), (0, a.jsx)(E.u, {
                    label: 'Язык обучения', options: De, columnName: 'id_language', optionValue: ne, onClickOption: qe,
                }), (0, a.jsx)(E.u, {
                    label: 'База образования', options: Ee, columnName: 'id_education_base', optionValue: H, onClickOption: Me,
                }), (0, a.jsx)(E.u, {
                    label: 'Форма обучения', options: se, columnName: '', optionValue: J, onClickOption: Re,
                }), (0, a.jsxs)('div', {
                    className: 'bYtwKdDq',
                    children: [(0, a.jsxs)(C.zx, {
                        theme: C.bn.BACKGROUND_DARK, className: B, onClick: Ge, children: [(0, a.jsx)(w.xv, { size: w.yH.XS, weight: w.fs.SEMIBOLD, children: 'Отмена' }), (0, a.jsx)(M.J, { Svg: R.Z })],
                    }), (0, a.jsxs)(C.zx, {
                        type: 'submit', theme: C.bn.BACKGROUND, className: B, disabled: Ce, children: [(0, a.jsx)(w.xv, { size: w.yH.XS, weight: w.fs.SEMIBOLD, children: 'Добавить' }), (0, a.jsx)(M.J, { Svg: q.Z })],
                    })],
                })],
            }), (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(D.u, {
                    className: (0, _.A)('ivSjY8wR', {}, [t]),
                    onClose: Fe,
                    isOpen: l,
                    title: 'Создание группы',
                    children: (0, a.jsx)(x.lx, {
                        className: (0, _.A)('m0hhNAZu', {}, ['needs-validation']),
                        noValidate: !0,
                        validated: b,
                        onSubmit(e) {
                            return n = void 0, t = void 0, l = function () {
                                let n; return (function (e, n) {
                                    let t; let a; let l; let r; let o = {
                                        label: 0, sent() { if (1 & l[0]) throw l[1]; return l[1]; }, trys: [], ops: [],
                                    }; return r = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function i(i) { return function (u) { return (function (i) { if (t) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, i[0] && (o = 0)), o;) try { if (t = 1, a && (l = 2 & i[0] ? a.return : i[0] ? a.throw || ((l = a.return) && l.call(a), 0) : a.next) && !(l = l.call(a, i[1])).done) return l; switch (a = 0, l && (i = [2 & i[0], l.value]), i[0]) { case 0: case 1: l = i; break; case 4: return o.label++, { value: i[1], done: !1 }; case 5: o.label++, a = i[1], i = [0]; continue; case 7: i = o.ops.pop(), o.trys.pop(); continue; default: if (!((l = (l = o.trys).length > 0 && l[l.length - 1]) || i[0] !== 6 && i[0] !== 2)) { o = 0; continue; } if (i[0] === 3 && (!l || i[1] > l[0] && i[1] < l[3])) { o.label = i[1]; break; } if (i[0] === 6 && o.label < l[1]) { o.label = l[1], l = i; break; } if (l && o.label < l[2]) { o.label = l[2], o.ops.push(i); break; }l[2] && o.ops.pop(), o.trys.pop(); continue; }i = n.call(e, o); } catch (e) { i = [6, e], a = 0; } finally { t = l = 0; } if (5 & i[0]) throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 }; }([i, u])); }; }
                                }(this, ((t) => { switch (t.label) { case 0: return e.preventDefault(), (n = e.currentTarget).checkValidity() || e.stopPropagation(), g(!0), n.checkValidity() ? (0, O.r)(fe) ? [4, de(v())] : [3, 2] : [3, 3]; case 1: return t.sent().meta.requestStatus === 'fulfilled' && (s(k.F.success('Группа добавлена')), Ge()), [3, 3]; case 2: s(k.F.error('Заполните все поля!')), t.label = 3; case 3: return [2]; } })));
                            }, new ((a = void 0) || (a = Promise))(((e, r) => { function o(e) { try { u(l.next(e)); } catch (e) { r(e); } } function i(e) { try { u(l.throw(e)); } catch (e) { r(e); } } function u(n) { let t; n.done ? e(n.value) : (t = n.value, t instanceof a ? t : new a(((e) => { e(t); }))).then(o, i); }u((l = l.apply(n, t || [])).next()); })); let n; let t; let a; let l;
                        },
                        children: n,
                    }),
                }), (0, a.jsx)(x.KF, { ref: d, push: u, placement: 'top-end' })],
            });
        }; const K = t(918); const Z = t(8217); const H = t(5039); const z = t(9250); const Q = t(9086); const J = [{
            id: 1, name: 'Создать группы студентов', pathname: (0, Q.Aj)(), active: window.location.pathname === (0, Q.Aj)(), items: null,
        }, {
            id: 2, name: 'Распределить студентов по группам', pathname: (0, Q.iy)(), active: window.location.pathname === (0, Q.iy)(), items: null,
        }]; let U = function () { return U = Object.assign || function (e) { for (var n, t = 1, a = arguments.length; t < a; t++) for (const l in n = arguments[t])Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]); return e; }, U.apply(this, arguments); }; const X = {
            studentGroups: i.N0, studentGroupDetail: Z.jJ, addStudentGroup: y, editStudentGroup: H.If, specialties: I.Ys, qualifications: A.lg, educationBases: V.kp, languages: F.So,
        }; const W = function () {
            const e = (0, c.v9)(i.qb); const n = (0, c.v9)(i.Qo); const t = (0, c.v9)(i.kO); const d = (0, r.useState)(''); const f = d[0]; const p = d[1]; const v = (0, r.useState)(); const h = v[0]; const b = v[1]; const g = (0, r.useState)(!1); const m = g[0]; const y = g[1]; const _ = (0, z.s0)(); const x = (0, r.useCallback)(((e) => { p(e); }), []); const w = (0, r.useCallback)((() => { _((0, Q.YR)()); }), [_]); return (0, r.useEffect)((() => { b(e || []); }), [e]), (0, r.useEffect)((() => { const n = (0, s.VS)(f, e || []); b(n || []); }), [e, f]), (0, a.jsx)(K.B, {
                title: 'LMS - Группы студентов',
                children: (0, a.jsx)(u.W, {
                    reducers: X,
                    removeAfterUnmount: !0,
                    children: (0, a.jsxs)('div', {
                        children: [(0, a.jsxs)('div', {
                            className: 'page-settings '.concat(!1),
                            children: [(0, a.jsx)(l.o, {
                                value: f, onChange: x, searchText: 'Введите для поиска по названию и коду', error: t, isLoading: n,
                            }), (0, a.jsx)(o.X, {
                                onlyAdding: !0, setVisibleAddNewField: y, addingModalText: 'Добавить группу', addingModalIcon: q.Z, secondBtnText: 'Прикрепить студентов к группе', references: J, referencesTitle: 'Ассистент', referencesPositionRight: !0, secondBtnHandler: w, error: t, isLoading: n, children: (0, a.jsx)(Y, { isOpen: m, setVisible: y }),
                            })],
                        }), (0, a.jsx)(i.Fb, { data: h || [], exportDisabled: !0 })],
                    }),
                }),
            });
        };
    },
    9884: (e, n, t) => { t.d(n, { d: () => a }); var a = function (e, n, t, a) { const l = String(e).slice(2, 4); return ''.concat(l).concat(n, '-').concat(t).concat(a); }; },
}]);
