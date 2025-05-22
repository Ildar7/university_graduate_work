!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const a = (new Error()).stack; a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = 'b95bab51-5baf-4836-ae55-1c9969454bb1', e._sentryDebugIdIdentifier = 'sentry-dbid-b95bab51-5baf-4836-ae55-1c9969454bb1'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[9511], {
    5131: (e, a, t) => {
        t.d(a, { Z: () => o }); let n; let i; const r = t(7294); function l() { return l = Object.assign ? Object.assign.bind() : function (e) { for (let a = 1; a < arguments.length; a++) { const t = arguments[a]; for (const n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); } return e; }, l.apply(this, arguments); } const o = function (e) {
            return r.createElement('svg', l({
                width: 20, height: 20, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), n || (n = r.createElement('path', { d: 'M7.5 3.75h-.833c-1.965 0-2.947 0-3.557.61-.61.61-.61 1.592-.61 3.557v4.166c0 1.964 0 2.946.61 3.557.61.61 1.592.61 3.557.61H7.5m0-10.853c0-1.911 0-2.867.59-3.39.588-.522 1.49-.365 3.29-.051l1.942.339c1.996.347 2.993.522 3.585 1.253.593.733.593 1.791.593 3.909v5.087c0 2.117 0 3.175-.592 3.908-.593.731-1.591.905-3.586 1.254l-1.94.338c-1.802.314-2.703.471-3.292-.052-.59-.522-.59-1.478-.59-3.389V5.397Z', stroke: '#fff', strokeWidth: 1.5 })), i || (i = r.createElement('path', {
                d: 'M10 9.167v1.666', stroke: '#fff', strokeWidth: 1.5, strokeLinecap: 'round',
            })));
        };
    },
    1290: (e, a, t) => {
        t.d(a, {
            Pu: () => i, g9: () => o, lj: () => c, vW: () => s, Jy: () => l,
        }); const n = t(7168); var i = (0, n.hg)('trainingSchedule/fetchTrainingScheduleSchema', ((e, a) => {
            return t = void 0, n = void 0, r = function () {
                let t; let n; return (function (e, a) {
                    let t; let n; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (s) { return (function (o) { if (t) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (t = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i; switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, n = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = a.call(e, l); } catch (e) { o = [6, e], n = 0; } finally { t = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, s])); }; }
                }(this, ((i) => { switch (i.label) { case 0: t = a.rejectWithValue, n = a.extra, i.label = 1; case 1: return i.trys.push([1, 3,, 4]), [4, n.api.get('/curriculum/training-schedule/schema?academic_year='.concat(e))]; case 2: return [2, i.sent().data]; case 3: return i.sent(), [2, t('ERROR')]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, a) => { function l(e) { try { s(r.next(e)); } catch (e) { a(e); } } function o(e) { try { s(r.throw(e)); } catch (e) { a(e); } } function s(a) { let t; a.done ? e(a.value) : (t = a.value, t instanceof i ? t : new i(((e) => { e(t); }))).then(l, o); }s((r = r.apply(t, n || [])).next()); })); let t; let n; let i; let r;
        })); const r = (0, n.oM)({
            name: 'trainingScheduleSchema', initialState: { data: void 0, isLoading: !1, error: void 0 }, reducers: {}, extraReducers(e) { e.addCase(i.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(i.fulfilled, ((e, a) => { e.isLoading = !1, e.data = a.payload; })).addCase(i.rejected, ((e, a) => { e.isLoading = !1, e.error = a.payload; })); },
        }); var l = (r.actions, r.reducer); var o = function (e) { let a; return (a = e.trainingScheduleSchema) === null || void 0 === a ? void 0 : a.data; }; var s = function (e) { let a; return (a = e.trainingScheduleSchema) === null || void 0 === a ? void 0 : a.isLoading; }; var c = function (e) { let a; return (a = e.trainingScheduleSchema) === null || void 0 === a ? void 0 : a.error; };
    },
    9511: (e, a, t) => {
        t.d(a, {
            bA: () => Ne, YE: () => d, p$: () => m, q7: () => o, JM: () => S, Is: () => k,
        }); const n = t(2233); const i = function (e) { let a; return (a = e.workingCurriculumTrainingSchedule) === null || void 0 === a ? void 0 : a.dataParsed; }; const r = function (e) { let a; return (a = e.workingCurriculumTrainingSchedule) === null || void 0 === a ? void 0 : a.editData; }; const l = function (e) { let a; return (a = e.workingCurriculumTrainingSchedule) === null || void 0 === a ? void 0 : a.professionalModules; }; var o = function (e) { let a; return (a = e.workingCurriculumTrainingSchedule) === null || void 0 === a ? void 0 : a.symbols; }; const s = function (e) { let a; return (a = e.workingCurriculumTrainingSchedule) === null || void 0 === a ? void 0 : a.selectedCells; }; const c = function (e) { let a; return (a = e.workingCurriculumTrainingSchedule) === null || void 0 === a ? void 0 : a.createAction; }; const u = function (e) { let a; return (a = e.workingCurriculumTrainingSchedule) === null || void 0 === a ? void 0 : a.editActions; }; var d = function (e) { let a; return (a = e.workingCurriculumTrainingSchedule) === null || void 0 === a ? void 0 : a.error; }; var m = function (e) { let a; return (a = e.workingCurriculumTrainingSchedule) === null || void 0 === a ? void 0 : a.isLoading; }; const f = function (e) { let a; return (a = e.workingCurriculumTrainingSchedule) === null || void 0 === a ? void 0 : a.readOnly; }; const h = function (e) { let a; return (a = e.workingCurriculumTrainingSchedule) === null || void 0 === a ? void 0 : a.redirectToMainPage; }; const b = t(7168); const y = (0, b.hg)('workingCurriculum/fetchTrainingScheduleDetail', ((e, a) => {
            return t = void 0, n = void 0, r = function () {
                let t; let n; let i; let r; return (function (e, a) {
                    let t; let n; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (s) { return (function (o) { if (t) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (t = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i; switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, n = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = a.call(e, l); } catch (e) { o = [6, e], n = 0; } finally { t = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, s])); }; }
                }(this, ((l) => { switch (l.label) { case 0: t = a.rejectWithValue, n = a.extra, i = a.dispatch, l.label = 1; case 1: return l.trys.push([1, 3,, 4]), [4, n.api.get('/curriculum/working-curriculum/'.concat(e, '/training-schedule/'))]; case 2: return [2, l.sent().data]; case 3: return (r = l.sent()).message === 'Failed to fetch' ? [2, t({ status: 500, error: 'timeout' })] : (r.response.status === 404 && i(S.initEditData()), [2, t({ status: r.response.status, error: r.response.data.message })]); case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, a) => { function l(e) { try { s(r.next(e)); } catch (e) { a(e); } } function o(e) { try { s(r.throw(e)); } catch (e) { a(e); } } function s(a) { let t; a.done ? e(a.value) : (t = a.value, t instanceof i ? t : new i(((e) => { e(t); }))).then(l, o); }s((r = r.apply(t, n || [])).next()); })); let t; let n; let i; let r;
        })); const v = (0, b.hg)('workingCurriculum/editWorkingCurriculumTrainingSchedule', ((e, a) => {
            return t = void 0, n = void 0, r = function () {
                let t; let n; let i; let r; let l; let o; let s; let c; let d; return (function (e, a) {
                    let t; let n; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (s) { return (function (o) { if (t) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (t = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i; switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, n = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = a.call(e, l); } catch (e) { o = [6, e], n = 0; } finally { t = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, s])); }; }
                }(this, ((m) => { switch (m.label) { case 0: t = a.rejectWithValue, n = a.extra, i = a.dispatch, r = a.getState, l = (d = u(r())) === null || void 0 === d ? void 0 : d.actions, o = { actions: l }, m.label = 1; case 1: return m.trys.push([1, 3,, 4]), [4, n.api.put('/curriculum/working-curriculum/'.concat(e, '/training-schedule/'), o)]; case 2: return s = m.sent(), i(y(e)), i(S.cancelEditing()), [2, s.data]; case 3: return c = m.sent(), i(S.cancelEditing()), [2, t({ errors: c.response.data.errors, status: c.response.status })]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, a) => { function l(e) { try { s(r.next(e)); } catch (e) { a(e); } } function o(e) { try { s(r.throw(e)); } catch (e) { a(e); } } function s(a) { let t; a.done ? e(a.value) : (t = a.value, t instanceof i ? t : new i(((e) => { e(t); }))).then(l, o); }s((r = r.apply(t, n || [])).next()); })); let t; let n; let i; let r;
        })); const _ = (0, b.hg)('workingCurriculum/createWorkingCurriculumTrainingSchedule', ((e, a) => {
            return t = void 0, n = void 0, r = function () {
                let t; let n; let i; let r; let l; let o; let s; let u; return (function (e, a) {
                    let t; let n; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (s) { return (function (o) { if (t) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (t = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i; switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, n = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = a.call(e, l); } catch (e) { o = [6, e], n = 0; } finally { t = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, s])); }; }
                }(this, ((d) => { switch (d.label) { case 0: t = a.rejectWithValue, n = a.extra, i = a.dispatch, r = a.getState, l = c(r()), o = { data: l == null ? void 0 : l.data }, d.label = 1; case 1: return d.trys.push([1, 3,, 4]), [4, n.api.post('/curriculum/working-curriculum/'.concat(e, '/training-schedule/'), o)]; case 2: return s = d.sent(), i(y(e)), i(S.cancelEditing()), [2, s.data]; case 3: return u = d.sent(), i(S.cancelEditing()), [2, t({ errors: u.response.data.errors, status: u.response.status })]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, a) => { function l(e) { try { s(r.next(e)); } catch (e) { a(e); } } function o(e) { try { s(r.throw(e)); } catch (e) { a(e); } } function s(a) { let t; a.done ? e(a.value) : (t = a.value, t instanceof i ? t : new i(((e) => { e(t); }))).then(l, o); }s((r = r.apply(t, n || [])).next()); })); let t; let n; let i; let r;
        })); const g = (0, b.hg)('workingCurriculum/fetchWorkingCurriculumProfessionalModules', ((e, a) => {
            return t = void 0, n = void 0, r = function () {
                let t; let n; let i; return (function (e, a) {
                    let t; let n; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (s) { return (function (o) { if (t) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (t = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i; switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, n = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = a.call(e, l); } catch (e) { o = [6, e], n = 0; } finally { t = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, s])); }; }
                }(this, ((r) => { switch (r.label) { case 0: t = a.rejectWithValue, n = a.extra, r.label = 1; case 1: return r.trys.push([1, 3,, 4]), [4, n.api.get('/curriculum/standard-curricula/'.concat(e, '/professional-units'))]; case 2: return [2, r.sent().data]; case 3: return (i = r.sent()).message === 'Failed to fetch' ? [2, t({ status: 500, error: 'timeout' })] : [2, t({ status: i.response.status, error: i.response.data.message })]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, a) => { function l(e) { try { s(r.next(e)); } catch (e) { a(e); } } function o(e) { try { s(r.throw(e)); } catch (e) { a(e); } } function s(a) { let t; a.done ? e(a.value) : (t = a.value, t instanceof i ? t : new i(((e) => { e(t); }))).then(l, o); }s((r = r.apply(t, n || [])).next()); })); let t; let n; let i; let r;
        })); let p = function () { return p = Object.assign || function (e) { for (var a, t = 1, n = arguments.length; t < n; t++) for (const i in a = arguments[t])Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]); return e; }, p.apply(this, arguments); }; const w = function (e, a, t) { if (t || arguments.length === 2) for (var n, i = 0, r = a.length; i < r; i++)!n && i in a || (n || (n = Array.prototype.slice.call(a, 0, i)), n[i] = a[i]); return e.concat(n || Array.prototype.slice.call(a)); }; const x = {
            data: void 0,
            professionalModules: [],
            editData: { data: [], summary: void 0 },
            selectedCells: void 0,
            editActions: {
                actions: {
                    delete: [], create: [], update: [], deleteTrainingCourses: [],
                },
                isLoading: !1,
                errors: void 0,
                updated: !1,
            },
            createAction: {
                data: [], isLoading: !1, errors: void 0, created: !1,
            },
            symbols: void 0,
            isLoading: !0,
            error: void 0,
            readOnly: !0,
            redirectToMainPage: !1,
        }; const C = (0, b.oM)({
            name: 'workingCurriculumTrainingSchedule',
            initialState: x,
            reducers: {
                initEditData(e) {
                    for (var a = [], t = 1; t <= 52; t++) {
                        a.push({
                            training_course: 1,
                            start_week: t,
                            end_week: t,
                            working_curriculum_symbol_id: 1,
                            working_curriculum_symbol: {
                                working_curriculum_symbol_id: 1, symbol_code: 'THEORY', name: 'Теоретическое обучение', displayed_symbol: ' ', symbol_hex_color: 'ffffff',
                            },
                            additional_information: null,
                        });
                    } e.editData.data = a;
                },
                initEditDataSummary(e) {
                    const a = {
                        bySymbols: {
                            THEORY: {
                                symbolId: 1, symbolCode: 'THEORY', symbolName: 'Теоретическое обучение', courses: { 1: { weeks: 52, credits: 78, hours: 1872 } }, total: { weeks: 52, credits: 78, hours: 1872 },
                            },
                        },
                        coursesCount: 1,
                    }; e.symbols.forEach(((e) => {
                        e.working_curriculum_symbol_id !== 1 && (a.bySymbols[e.symbol_code] = {
                            symbolId: e.working_curriculum_symbol_id, symbolCode: e.symbol_code, symbolName: e.name, courses: { 1: { weeks: 0, credits: 0, hours: 0 } }, total: { weeks: 0, credits: 0, hours: 0 },
                        });
                    })), e.editData.summary = a;
                },
                changeSelectedCells(e, a) { e.selectedCells = a.payload; },
                deleteSelectedCells(e) { e.selectedCells = x.selectedCells; },
                changeSelectedSymbolInData(e, a) {
 e.editData.data = w([], e.editData.data, !0).map(((e) => (e.training_course === a.payload[0].training_course && e.start_week === a.payload[0].start_week && e.end_week === a.payload[0].end_week ? ({
                    ...e, working_curriculum_symbol_id: a.payload[0].working_curriculum_symbol_id, working_curriculum_symbol: a.payload[0].working_curriculum_symbol, additional_information: a.payload[0].additional_information, 
}) : ({ ...e })))); const t = Object.keys(e.editData.summary.bySymbols); const n = {}; t.forEach(((e) => { n[e] = 0; })), e.editData.data.forEach(((e) => { e.training_course === a.payload[0].training_course && (n[e.working_curriculum_symbol.symbol_code] += 1); })); const i = { ...e.editData.summary }; t.forEach(((e) => { const t = i.bySymbols[e].courses[a.payload[0].training_course]; t.weeks = n[e], t.hours = 36 * n[e], t.credits = Math.floor(36 * n[e] / a.payload[1]) + (n[e] % 2 == 0 ? 0 : 1); })), e.editData.summary = i; 
},
                calculateTotalFieldsInSummaryData(e) { const a = Object.keys(e.editData.summary.bySymbols); const t = {}; const n = { ...e.editData.summary }; a.forEach(((e) => { t[e] = { weeks: 0, hours: 0, credits: 0 }; })), a.forEach(((a) => { for (let i = 1; i <= e.editData.summary.coursesCount; i++) { const r = e.editData.summary.bySymbols[a].courses[i]; t[a].weeks += r.weeks, t[a].hours += r.hours, t[a].credits += r.credits; }n.bySymbols[a].total = t[a]; })), e.editData.summary = n; },
                deleteCourseFromTable(e, a) { let t; let n; if (e.data) { const i = w([], e.editData.data, !0).slice(a.payload[1], a.payload[2]).filter(((e) => e.working_curriculum_training_schedule_id)); if (i.length) { const r = []; i.forEach(((e) => { r.push(e.training_course); })); const l = Array.from(new Set(r)); e.editActions.actions.deleteTrainingCourses = w(w([], e.editActions.actions.deleteTrainingCourses, !0), l, !0); }e.editActions.actions.update = (t = e.editActions.actions.update) === null || void 0 === t ? void 0 : t.filter(((e) => e.fields.training_course !== a.payload[0])); }e.editData.data.splice(a.payload[1], 52); const o = { ...e.editData.summary, coursesCount: e.editData.summary.coursesCount - 1 }; Object.keys(e.editData.summary.bySymbols).forEach(((e) => { const t = o.bySymbols[e].courses[a.payload[0]]; o.bySymbols[e].total = { weeks: o.bySymbols[e].total.weeks - t.weeks, credits: o.bySymbols[e].total.credits - t.credits, hours: o.bySymbols[e].total.hours - t.hours }, delete o.bySymbols[e].courses[a.payload[0]]; })), e.editData.summary = o, e.editActions.actions.create = (n = e.editActions.actions.create) === null || void 0 === n ? void 0 : n.filter(((e) => e.training_course !== a.payload[0])); },
                cancelEditing(e) {
                    if (e.data) {
                        for (var a = [], t = 0; t < e.data.data.length; t++) {
 for (let n = e.data.data[t].start_week - 1; n <= e.data.data[t].end_week - 1; n++) { e.data.data[t].training_course === 1 ? a[n] = {
                            ...e.data.data[t], start_week: n + 1, end_week: n + 1, additional_information: e.data.data[t].additional_information ? ({ ...e.data.data[t].additional_information, start: e.data.data[t].start_week, end: e.data.data[t].end_week }) : null, 
} : e.data.data[t].training_course === 2 ? a[n + 52] = {
                            ...e.data.data[t], start_week: n + 1, end_week: n + 1, additional_information: e.data.data[t].additional_information ? ({ ...e.data.data[t].additional_information, start: e.data.data[t].start_week, end: e.data.data[t].end_week }) : null, 
} : e.data.data[t].training_course === 3 ? a[n + 104] = {
                            ...e.data.data[t], start_week: n + 1, end_week: n + 1, additional_information: e.data.data[t].additional_information ? ({ ...e.data.data[t].additional_information, start: e.data.data[t].start_week, end: e.data.data[t].end_week }) : null, 
} : a[n + 156] = {
                            ...e.data.data[t], start_week: n + 1, end_week: n + 1, additional_information: e.data.data[t].additional_information ? ({ ...e.data.data[t].additional_information, start: e.data.data[t].start_week, end: e.data.data[t].end_week }) : null, 
}; } } e.editData = { data: a, summary: e.data.summary };
                    } else {
                        const i = []; for (t = 1; t <= 52; t++) {
                            i.push({
                                training_course: 1,
                                start_week: t,
                                end_week: t,
                                working_curriculum_symbol_id: 1,
                                working_curriculum_symbol: {
                                    working_curriculum_symbol_id: 1, symbol_code: 'THEORY', name: 'Теоретическое обучение', displayed_symbol: ' ', symbol_hex_color: 'ffffff',
                                },
                            });
                        } e.editData.data = i; const r = {
                            bySymbols: {
                                THEORY: {
                                    symbolId: 1, symbolCode: 'THEORY', symbolName: 'Теоретическое обучение', courses: { 1: { weeks: 52, credits: 78, hours: 1872 } }, total: { weeks: 52, credits: 78, hours: 1872 },
                                },
                            },
                            coursesCount: 1,
                        }; e.symbols.forEach(((e) => {
                            e.working_curriculum_symbol_id !== 1 && (r.bySymbols[e.symbol_code] = {
                                symbolId: e.working_curriculum_symbol_id, symbolCode: e.symbol_code, symbolName: e.name, courses: { 1: { weeks: 0, credits: 0, hours: 0 } }, total: { weeks: 0, credits: 0, hours: 0 },
                            });
                        })), e.editData.summary = r;
                    }e.selectedCells = x.selectedCells, e.editActions = x.editActions, e.createAction = x.createAction;
                },
                addNewCourse(e) {
                    for (var a, t, n, i, r, l, o, s, c = [], u = e.editData.data.length / 52 + 1, d = 1; d <= 52; d++) {
                        c.push({
                            training_course: u,
                            start_week: d,
                            end_week: d,
                            working_curriculum_symbol_id: 1,
                            working_curriculum_symbol: {
                                working_curriculum_symbol_id: 1, symbol_code: 'THEORY', name: 'Теоретическое обучение', displayed_symbol: ' ', symbol_hex_color: 'ffffff',
                            },
                        });
                    } e.editData.data = w(w([], e.editData.data, !0), c, !0); const m = {
                        bySymbols: {
                            THEORY: {
                                symbolId: 1, symbolCode: 'THEORY', symbolName: 'Теоретическое обучение', courses: { ...((t = e.editData.summary) === null || void 0 === t ? void 0 : t.bySymbols.THEORY.courses), ...(a = {}, a[e.editData.data.length / 52] = { weeks: 52, credits: 78, hours: 1872 }, a) }, total: { weeks: (((n = e.editData.summary) === null || void 0 === n ? void 0 : n.bySymbols.THEORY.total.weeks) || 0) + 52, credits: (((i = e.editData.summary) === null || void 0 === i ? void 0 : i.bySymbols.THEORY.total.credits) || 0) + 78, hours: (((r = e.editData.summary) === null || void 0 === r ? void 0 : r.bySymbols.THEORY.total.hours) || 0) + 1872 },
                            },
                        },
                        coursesCount: e.editData.data.length / 52,
                    }; if (e.symbols.forEach(((a) => {
                        let t; let n; a.working_curriculum_symbol_id !== 1 && (m.bySymbols[a.symbol_code] = {
                            symbolId: a.working_curriculum_symbol_id, symbolCode: a.symbol_code, symbolName: a.name, courses: { ...((n = e.editData.summary) === null || void 0 === n ? void 0 : n.bySymbols[a.symbol_code].courses), ...(t = {}, t[e.editData.data.length / 52] = { weeks: 0, credits: 0, hours: 0 }, t) }, total: { weeks: e.editData.summary.bySymbols[a.symbol_code].total.weeks, credits: e.editData.summary.bySymbols[a.symbol_code].total.credits, hours: e.editData.summary.bySymbols[a.symbol_code].total.hours },
                        });
                    })), e.editData.summary = m, e.editActions.actions.create = w(w([], e.editActions.actions.create || [], !0), [{
                        training_course: u, start_week: 1, end_week: 52, working_curriculum_symbol_id: 1, additional_information: null,
                    }], !1), (l = e.editActions.actions.deleteTrainingCourses) === null || void 0 === l ? void 0 : l.includes(u)) { e.editActions.actions.deleteTrainingCourses = (o = e.editActions.actions.deleteTrainingCourses) === null || void 0 === o ? void 0 : o.filter(((e) => e !== u)); const f = (s = e.data) === null || void 0 === s ? void 0 : s.data.filter(((e) => e.training_course === u)); f && f.length && f.forEach(((a) => { let t; a.working_curriculum_training_schedule_id && ((t = e.editActions.actions.delete) === null || void 0 === t || t.push(a.working_curriculum_training_schedule_id)); })); }
                },
                createNewTrainingSchedule(e) {
                    for (var a = w(w([], e.editData.data, !0), [{
                            training_course: -1, working_curriculum_symbol_id: -1, start_week: -1, end_week: -1, additional_information: null,
                        }], !1), t = [], n = [], i = 0; i < a.length - 1; i++) {
                        a[i].working_curriculum_symbol_id === a[i + 1].working_curriculum_symbol_id && a[i].training_course === a[i + 1].training_course && i !== a.length - 2 ? t.push(a[i]) : (t.push(a[i]), n.push({
                            working_curriculum_symbol_id: t[0].working_curriculum_symbol_id, training_course: t[0].training_course, start_week: t[0].start_week, end_week: t[t.length - 1].end_week, additional_information: t[0].additional_information ? { standard_curriculum_modules_units_ids: t[0].additional_information.standard_curriculum_modules_units_ids } : null,
                        }), t = []);
                    } e.createAction.data = n;
                },
                updateTrainingSchedule(e) {
                    for (var a, t = e.selectedCells.cells[0].training_course, n = [], i = 0; i < e.editData.data.length; i++)t === e.editData.data[i].training_course && e.editData.data[i].working_curriculum_training_schedule_id && n.push(e.editData.data[i].working_curriculum_training_schedule_id); const r = Array.from(new Set(n)); e.editActions.actions.delete = Array.from(new Set(w(w([], e.editActions.actions.delete || [], !0), r, !0))); const l = w(w([], e.editData.data.filter(((e) => e.training_course === t)), !0), [{
                        training_course: -1, working_curriculum_symbol_id: -1, start_week: -1, end_week: -1, additional_information: null,
                    }], !1); let o = []; const s = []; for (i = 0; i < l.length - 1; i++) {
                        l[i].working_curriculum_symbol_id === l[i + 1].working_curriculum_symbol_id && l[i].training_course === l[i + 1].training_course && i !== l.length - 2 ? o.push(l[i]) : (o.push(l[i]), s.push({
                            working_curriculum_symbol_id: o[0].working_curriculum_symbol_id, training_course: o[0].training_course, start_week: o[0].start_week, end_week: o[o.length - 1].end_week, additional_information: o[0].additional_information ? { standard_curriculum_modules_units_ids: o[0].additional_information.standard_curriculum_modules_units_ids } : null,
                        }), o = []);
                    } e.editActions.actions.create = Array.from(new Set(w(w([], ((a = e.editActions.actions.create) === null || void 0 === a ? void 0 : a.filter(((e) => e.training_course !== t))) || [], !0), s, !0)));
                },
                changeReadOnly(e, a) { e.readOnly = a.payload; },
                changeRedirectToMainPage(e, a) { e.redirectToMainPage = a.payload; },
            },
            extraReducers(e) {
                e.addCase(y.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(y.fulfilled, ((e, a) => {
                    e.data = a.payload; for (var t = [], n = 0; n < a.payload.data.length; n++) {
 for (let i = a.payload.data[n].start_week - 1; i <= a.payload.data[n].end_week - 1; i++) { a.payload.data[n].training_course === 1 ? t[i] = {
                        ...a.payload.data[n], start_week: i + 1, end_week: i + 1, additional_information: a.payload.data[n].additional_information ? ({ ...a.payload.data[n].additional_information, start: a.payload.data[n].start_week, end: a.payload.data[n].end_week }) : null, 
} : a.payload.data[n].training_course === 2 ? t[i + 52] = {
                        ...a.payload.data[n], start_week: i + 1, end_week: i + 1, additional_information: a.payload.data[n].additional_information ? ({ ...a.payload.data[n].additional_information, start: a.payload.data[n].start_week, end: a.payload.data[n].end_week }) : null, 
} : a.payload.data[n].training_course === 3 ? t[i + 104] = {
                        ...a.payload.data[n], start_week: i + 1, end_week: i + 1, additional_information: a.payload.data[n].additional_information ? ({ ...a.payload.data[n].additional_information, start: a.payload.data[n].start_week, end: a.payload.data[n].end_week }) : null, 
} : t[i + 156] = {
                        ...a.payload.data[n], start_week: i + 1, end_week: i + 1, additional_information: a.payload.data[n].additional_information ? ({ ...a.payload.data[n].additional_information, start: a.payload.data[n].start_week, end: a.payload.data[n].end_week }) : null, 
}; } } e.dataParsed = { data: w([], t, !0), summary: a.payload.summary }, e.editData = { data: t, summary: a.payload.summary }, e.isLoading = !1;
                })).addCase(y.rejected, ((e, a) => { e.isLoading = !1, e.error = a.payload; })).addCase(n.z.pending, ((e) => { e.error = void 0, e.isLoading = !0; }))
                    .addCase(n.z.fulfilled, ((e, a) => { e.isLoading = !1, e.symbols = a.payload; }))
                    .addCase(n.z.rejected, ((e, a) => { e.isLoading = !1, e.error = a.payload; }))
                    .addCase(_.pending, ((e) => { e.createAction.errors = void 0, e.createAction.isLoading = !0, e.createAction.created = !1; }))
                    .addCase(_.fulfilled, ((e) => { e.createAction.isLoading = !1, e.createAction.created = !0; }))
                    .addCase(_.rejected, ((e, a) => { e.createAction.isLoading = !1, e.createAction.errors = a.payload, e.createAction.created = !1; }))
                    .addCase(v.pending, ((e) => { e.editActions.errors = void 0, e.editActions.isLoading = !0, e.editActions.updated = !1; }))
                    .addCase(v.fulfilled, ((e) => { e.editActions.isLoading = !1, e.editActions.updated = !0; }))
                    .addCase(v.rejected, ((e, a) => { e.editActions.isLoading = !1, e.editActions.errors = a.payload, e.editActions.updated = !1; }))
                    .addCase(g.pending, ((e) => { e.error = void 0, e.isLoading = !0; }))
                    .addCase(g.fulfilled, ((e, a) => { e.isLoading = !1, e.professionalModules = a.payload; }))
                    .addCase(g.rejected, ((e, a) => { e.isLoading = !1, e.error = a.payload; }));
            },
        }); var S = C.actions; var k = C.reducer; const j = t(5893); const N = t(7294); const E = t(4387); const A = t(9250); const D = t(9161); const O = t(1353); const R = t(5131); const M = t(9456); const I = t(8321); const T = t(4809); const H = t(9086); const z = t(5461); const L = t(6458); const X = t(4475); const B = t(530); const P = t(9719); const F = t(596); const W = t(238); const q = 'm48iPXjA'; let Y = function () { return Y = Object.assign || function (e) { for (var a, t = 1, n = arguments.length; t < n; t++) for (const i in a = arguments[t])Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]); return e; }, Y.apply(this, arguments); }; const G = (0, N.memo)(((e) => {
            const a = e.className; const t = e.isOpen; const n = e.onClose; const i = e.onSubmitForm; const r = (0, A.s0)(); const l = (0, N.useCallback)((() => { r((0, H.MC)()); }), [r]); return (0, j.jsxs)(W.u, {
                contentClassName: (0, E.A)('DfS6yxmJ', {}, [a]),
                onClose: n,
                isOpen: t,
                children: [(0, j.jsx)(T.xv, { weight: T.fs.SEMIBOLD, align: T.PH.CENTER, children: 'Сохранить измененные данные?' }), (0, j.jsxs)('div', {
                    className: '__nuQ_R_',
                    children: [(0, j.jsxs)(D.zx, {
                        theme: D.bn.BACKGROUND, size: D.qE.XS, className: q, onClick: i, children: [(0, j.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Да' }), (0, j.jsx)(O.J, { Svg: I.Z })],
                    }), (0, j.jsxs)(D.zx, {
                        theme: D.bn.BACKGROUND_DARK, size: D.qE.XS, className: q, onClick: l, children: [(0, j.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Нет' }), (0, j.jsx)(O.J, { Svg: M.Z })],
                    })],
                })],
            });
        })); const U = {
            WorkingCurriculumTrainingSchedule: 'mtCtwhS9', content: 'tCVzT7aH', buttons: 'xRmYROEA', buttonsRightWrapper: 'uhOeSH4s', btn: 'ikwCTpz1', exitBtnIcon: 'xVhgjVVQ', editIcon: 'cZ1GXqb9', fileIcon: '_UukG9oK',
        }; const Z = t(3728); const J = t(1138); const K = t(3009); const V = t(1290); const Q = {
            WorkingCurriculumTrainingScheduleGeneralInfo: 'akngmItM', title: 'tzBOQF1h', content: 'hUuopTM7', table: 'GjDWlhyU', tableRow: 'KNxEI8DO', tableCell: 'jygmKaMG', tableBody: 'Nt0654gJ', tableCellTitle: 'kicnwEEZ', tableCellSpecialty: 'iy5WFOpv', tableCellQualification: 'T7Ak8VOY', tableCellId: 'aOkfMV1E', tableCellAcademYear: 'qa035Y8M', tableCellEducationBase: 'XX6fRgkA', tableCellEduForm: 'zk1qF_S4', showMoreBtn: 'RZAA2ZOW',
        }; let $; let ee = function () { return ee = Object.assign || function (e) { for (var a, t = 1, n = arguments.length; t < n; t++) for (const i in a = arguments[t])Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]); return e; }, ee.apply(this, arguments); }; const ae = (0, N.memo)(((e) => {
            let a; const t = e.className; const n = e.workingCurriculumId; const i = (0, z.T)(); const r = (0, N.useState)([]); const l = r[0]; const o = r[1]; const s = (0, N.useState)(!1); const c = s[0]; const u = s[1]; const d = (0, L.v9)(Z.Qw); const m = (0, L.v9)(Z.vO); const f = (0, L.v9)(Z.Ke); const h = (0, L.v9)(K.qJ); const b = (0, L.v9)(K.Rs); const y = (0, L.v9)(K.bV); const v = (0, N.useCallback)((() => { u(((e) => !e)); }), []); return (0, N.useEffect)((() => { n && i((0, Z.kg)(n)); }), [i, n]), (0, N.useEffect)((() => { d && !m && (i((0, K._N)(String(d.standard_curricula.standard_curriculum_id))), i((0, V.Pu)(String(d.academic_year_from)))); }), [i, d, m]), (0, N.useEffect)((() => { h && o(c ? h.qualifications : h.qualifications.slice(0, 1)); }), [c, h]), a = m || b ? (0, j.jsx)(J.O, { width: '100%', height: 200 }) : f || y ? (0, j.jsx)(T.xv, {
                theme: T.lg.ERROR, size: T.yH.M, weight: T.fs.SEMIBOLD, className: Q.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, j.jsxs)(j.Fragment, {
                children: [(0, j.jsxs)('div', { className: (0, E.A)(Q.table, {}, []), children: [(0, j.jsx)('div', { className: Q.tableHead, children: (0, j.jsxs)('div', { className: Q.tableRow, children: [(0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellId]), children: (0, j.jsx)(T.xv, { size: T.yH.XS, children: 'ID' }) }), (0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellTitle]), children: (0, j.jsx)(T.xv, { size: T.yH.XS, children: 'Название' }) }), (0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellSpecialty]), children: (0, j.jsx)(T.xv, { size: T.yH.XS, children: 'Специальность' }) }), (0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellQualification]), children: (0, j.jsx)(T.xv, { size: T.yH.XS, children: 'Квалификация' }) }), (0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellEducationBase]), children: (0, j.jsx)(T.xv, { size: T.yH.XS, children: 'База образования' }) }), (0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellEduForm]), children: (0, j.jsx)(T.xv, { size: T.yH.XS, children: 'Форма обучения' }) }), (0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellAcademYear]), children: (0, j.jsx)(T.xv, { size: T.yH.XS, children: 'Академический год' }) })] }) }), (0, j.jsx)('div', { className: Q.tableBody, children: l.length ? l.map(((e) => (0, j.jsxs)('div', { className: Q.tableRow, children: [(0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellId]), children: (0, j.jsx)(T.xv, { size: T.yH.XS, children: d == null ? void 0 : d.working_curriculum_id }) }), (0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellTitle]), children: (0, j.jsx)(T.xv, { size: T.yH.XXS, children: d == null ? void 0 : d.title }) }), (0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellSpecialty]), children: (0, j.jsxs)(T.xv, { size: T.yH.XXS, children: [d == null ? void 0 : d.standard_curricula.specialty.shifr_spec, ' ', '-', ' ', d == null ? void 0 : d.standard_curricula.specialty.speciality] }) }), (0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellQualification]), children: (0, j.jsxs)(T.xv, { size: T.yH.XXS, children: [e.qualification.shifr_qual, ' ', '-', ' ', e.qualification.qualification] }) }), (0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellEducationBase]), children: (0, j.jsx)(T.xv, { size: T.yH.XS, children: d == null ? void 0 : d.education_basis.short_name }) }), (0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellEduForm]), children: (0, j.jsx)(T.xv, { size: T.yH.XS, children: (d == null ? void 0 : d.is_full_time_education) ? 'Очная' : 'Заочная' }) }), (0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellAcademYear]), children: (0, j.jsxs)(T.xv, { size: T.yH.XS, children: [d == null ? void 0 : d.academic_year_from, ' ', '-', ' ', d == null ? void 0 : d.academic_year_to] }) })] }, e.qualification_id))) : (0, j.jsxs)('div', { className: Q.tableRow, children: [(0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellId]), children: (0, j.jsx)(T.xv, { size: T.yH.XS, children: d == null ? void 0 : d.working_curriculum_id }) }), (0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellTitle]), children: (0, j.jsx)(T.xv, { size: T.yH.XXS, children: d == null ? void 0 : d.title }) }), (0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellSpecialty]), children: (0, j.jsxs)(T.xv, { size: T.yH.XXS, children: [d == null ? void 0 : d.standard_curricula.specialty.shifr_spec, ' ', '-', ' ', d == null ? void 0 : d.standard_curricula.specialty.speciality] }) }), (0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellQualification]) }), (0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellEducationBase]), children: (0, j.jsx)(T.xv, { size: T.yH.XS, children: d == null ? void 0 : d.education_basis.short_name }) }), (0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellEduForm]), children: (0, j.jsx)(T.xv, { size: T.yH.XS, children: (d == null ? void 0 : d.is_full_time_education) ? 'Очная' : 'Заочная' }) }), (0, j.jsx)('div', { className: (0, E.A)(Q.tableCell, {}, [Q.tableCellAcademYear]), children: (0, j.jsxs)(T.xv, { size: T.yH.XS, children: [d == null ? void 0 : d.academic_year_from, ' ', '-', ' ', d == null ? void 0 : d.academic_year_to] }) })] }) })] }), l.length && h.qualifications.length > 1 ? (0, j.jsx)(D.zx, {
                    theme: D.bn.CLEAR, className: Q.showMoreBtn, onClick: v, children: c ? 'Показать меньше информации' : 'Показать больше информации',
                }) : ''],
            }), (0, j.jsxs)('div', {
                className: (0, E.A)(Q.WorkingCurriculumTrainingScheduleGeneralInfo, {}, [t]),
                children: [(0, j.jsx)(T.xv, {
                    size: T.yH.M, theme: T.lg.PRIMARY, weight: T.fs.SEMIBOLD, align: T.PH.CENTER, className: Q.title, children: 'Общая информация о РУП',
                }), (0, j.jsx)('div', { className: Q.content, children: a })],
            });
        })); function te() { return te = Object.assign ? Object.assign.bind() : function (e) { for (let a = 1; a < arguments.length; a++) { const t = arguments[a]; for (const n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); } return e; }, te.apply(this, arguments); } const ne = function (e) {
            return N.createElement('svg', te({
                width: 24, height: 27, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), $ || ($ = N.createElement('path', { d: 'M4.692 26.333c-.745 0-1.38-.262-1.905-.786A2.595 2.595 0 0 1 2 23.642V3H.333V1.333H7V.05h10v1.283h6.667V3H22v20.642c0 .766-.256 1.406-.77 1.92s-1.155.771-1.922.771H4.692ZM20.334 3H3.666v20.642c0 .299.096.544.288.736a.998.998 0 0 0 .737.289h14.616c.256 0 .491-.107.706-.32.213-.215.32-.45.32-.705V3ZM8.347 21.333h1.667v-15H8.347v15Zm5.64 0h1.666v-15h-1.666v15Z', fill: '#FF6D6D' })));
        }; const ie = t(8683); const re = t(6648); const le = {
            content: 'nL7KIev0', title: 'trg8FWNS', selectSymbols: 'k3_Navdm', theorySymbol: 'sxk7s3Rv', symbolBtn: 'VGFTU6R_', activeSymbolBtn: 'FHjlIFqe', table: 'xIWmOutF', tableRow: 'efg1pAPl', tableCell: 'jSl_WZRR', tableAsideName: 'L8UtEU3b', tableMonths: 'XRP8WGEW', tableMonth: 's2WiyvZc', tableMonthName: 'MZfbyiAm', tableMonthDate: 'spmJ_eUE', tableMonthDates: 'iPYTfFX0', tableCourseInfoWrapper: 'vrYToqE9', tableCourseName: 'iLkscRUv', deleteActiveButton: 'aDhKQ2Ha', tableWeeks: 'PNHohCa0', tableMonthEmpty: 'YbUjdiz0', tableCourseInfo: '_sldKtZO', tableWeek: 'daisrCSr', symbolsInfo: 'dFzRfzxQ', symbolInfo: 'dILpughZ', symbolBox: 'HVKMuNmq', symbolText: 'Ye2uFwom', tableAddNewRow: 'lt6APiTz', tableAddNewRowIcon: 'X70bPw40',
        }; const oe = t(9107); let se = function () { return se = Object.assign || function (e) { for (var a, t = 1, n = arguments.length; t < n; t++) for (const i in a = arguments[t])Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]); return e; }, se.apply(this, arguments); }; const ce = (0, N.memo)(((e) => {
            const a = e.className; const t = e.trainingScheduleData; const n = e.course; const i = e.setCourse; const r = (0, z.T)(); const l = []; const o = (0, N.useState)(0); const c = o[0]; const u = o[1]; const d = (0, N.useState)(0); const m = d[0]; const h = d[1]; const b = (0, N.useState)(!1); const y = b[0]; const v = b[1]; const _ = (0, oe.X)().width; const g = (0, N.useState)(0); const p = g[0]; const w = g[1]; const x = (0, L.v9)(s); const C = (0, L.v9)(f); const k = function (e, a) { !C && y && (e.additional_information ? h(c <= m ? e.additional_information.end : e.additional_information.start) : h(a)); }; return (0, N.useEffect)((() => { w(_ <= 1919 ? 21.9 : 34.05); }), [_]), (0, N.useEffect)((() => {
                if (!C && t && c !== 0 && n !== 0 && m !== 0) {
                    const e = []; const a = []; if (c < m) for (var i = c; i <= m; i++)e.push(t[i - 1]), a.push(t[i - 1].working_curriculum_symbol_id); else for (i = m; i <= c; i++)e.push(t[i - 1]), a.push(t[i - 1].working_curriculum_symbol_id); const l = {
                        trainingCourse: n, cells: e, symbol: a, symbolsEqual: a.every(((e, a, t) => e === t[0])),
                    }; r(S.changeSelectedCells(l));
                }
            }), [n, r, m, c, C]), (0, N.useEffect)((() => { x && !C || (u(0), h(0), i(0)); }), [x, i, C]), t == null || t.forEach(((e, t) => {
                let r; let o; const s = (0, j.jsx)('div', {
                    className: (0, E.A)('N1CqgYir', (r = {}, r.xLfDKRmD = (m <= e.start_week && e.start_week <= c || c <= e.start_week && e.start_week <= m) && e.training_course === n && c !== 0 && m !== 0, r.nkaUDr30 = c < m ? t + 1 === c && e.training_course === n && c !== 0 && m !== 0 : t + 1 === m && e.training_course === n && c !== 0 && m !== 0, r.R6vTFuPj = c < m ? t + 1 === m && e.training_course === n && c !== 0 && m !== 0 : t + 1 === c && e.training_course === n && c !== 0 && m !== 0, r.vXCbG146 = !!e.additional_information, r.qQw2Qb6_ = !!e.additional_information && e.additional_information.start === t + 1, r.X6dZqTRL = !!e.additional_information && e.additional_information.end === t + 1, r.g7frtJ8c = C, r), [a]), onMouseDown() { return (function (e, a, t) { C || (e.additional_information ? (u(e.additional_information.start), h(e.additional_information.end), i(a), v(!0), k(e, t)) : (u(0), h(0), i(a), v(!0), u(t), k(e, t))); }(e, e.training_course, e.start_week)); }, onMouseUp() { return (function (e, a, t) { void 0 === t && (t = m), C || (i(a), v(!1), k(e, t)); }(e, e.training_course, e.start_week)); }, onMouseMove() { return k(e, e.start_week); }, children: (0, j.jsx)('span', { style: { width: e.additional_information && e.end_week && e.start_week ? ''.concat((e.additional_information.end - e.additional_information.start + 1) * p, 'px') : 'auto' }, className: 'RAoAteyr', children: (0, j.jsxs)('span', { style: { backgroundColor: ''.concat(e.working_curriculum_symbol.symbol_hex_color) }, children: [e.working_curriculum_symbol.displayed_symbol, e.working_curriculum_symbol.symbol_code === 'PROFESSIONAL_MODULE' && ((o = e.additional_information) === null || void 0 === o ? void 0 : o.standard_curriculum_modules_units_ids.join(',')), e.additional_information && e.additional_information.end && e.additional_information.start && e.additional_information.end - e.additional_information.start + 1 >= 6 && ' ('.concat(e.additional_information.end - e.additional_information.start + 1, ' жұма/нед)')] }) }),
                }, e.start_week + e.training_course + e.working_curriculum_symbol.symbol_code); l.push(s);
            })), (0, j.jsx)('div', { className: 'mOK0Jtvy', onMouseLeave() { v(!1); }, children: l });
        })); const ue = 'JnCNJH38'; let de = function () { return de = Object.assign || function (e) { for (var a, t = 1, n = arguments.length; t < n; t++) for (const i in a = arguments[t])Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]); return e; }, de.apply(this, arguments); }; const me = {
            course_1: [0, 52], course_2: [52, 104], course_3: [104, 156], course_4: [156, 208],
        }; const fe = (0, N.memo)(((e) => {
            const a = e.className; const t = e.onClose; const n = e.isOpen; const i = e.deletingCourse; const l = (0, z.T)(); const o = (0, L.v9)(r); const c = (0, L.v9)(s); const u = (0, N.useCallback)((() => { if (o && i === o.data.length / 52) { const e = me['course_'.concat(i)]; l(S.deleteCourseFromTable([i, e[0], e[1]])); }(c == null ? void 0 : c.trainingCourse) === i && l(S.deleteSelectedCells()), t(); }), [i, l, t, c == null ? void 0 : c.trainingCourse, o]); return (0, j.jsxs)(W.u, {
                contentClassName: (0, E.A)('Exm2LN_F', {}, [a]),
                onClose: t,
                isOpen: n,
                children: [(0, j.jsx)(T.xv, {
                    size: T.yH.XS, weight: T.fs.SEMIBOLD, align: T.PH.CENTER, children: 'В выбранном поле присутствуют данные.',
                }), (0, j.jsx)(T.xv, {
                    size: T.yH.XS, weight: T.fs.SEMIBOLD, align: T.PH.CENTER, children: 'Продолжить?',
                }), (0, j.jsxs)('div', {
                    className: 'zQQiM38C',
                    children: [(0, j.jsxs)(D.zx, {
                        theme: D.bn.BACKGROUND_DARK, size: D.qE.XS, className: ue, onClick: t, children: [(0, j.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Отмена' }), (0, j.jsx)(O.J, { Svg: M.Z })],
                    }), (0, j.jsxs)(D.zx, {
                        theme: D.bn.BACKGROUND, size: D.qE.XS, className: ue, onClick: u, children: [(0, j.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Удалить' }), (0, j.jsx)(O.J, { Svg: I.Z })],
                    })], 
})],
            });
        })); const he = t(100); const be = 'tNFhIUUq'; let ye = function () { return ye = Object.assign || function (e) { for (var a, t = 1, n = arguments.length; t < n; t++) for (const i in a = arguments[t])Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]); return e; }, ye.apply(this, arguments); }; const ve = function (e, a, t) { if (t || arguments.length === 2) for (var n, i = 0, r = a.length; i < r; i++)!n && i in a || (n || (n = Array.prototype.slice.call(a, 0, i)), n[i] = a[i]); return e.concat(n || Array.prototype.slice.call(a)); }; const _e = (0, N.memo)(((e) => {
            let a; const t = e.className; const n = e.onClose; const i = e.isOpen; const r = e.creditsPerHour; const c = (0, N.useState)(); const u = c[0]; const d = c[1]; const m = (0, N.useRef)(null); const f = (0, z.T)(); const h = (0, N.useState)([]); const b = h[0]; const y = h[1]; const v = (0, N.useState)([]); const _ = v[0]; const p = v[1]; const w = (0, N.useState)([]); const x = w[0]; const C = w[1]; const k = (a = (0, L.v9)(K.qJ)) === null || void 0 === a ? void 0 : a.standard_curriculum_id; const A = (0, L.v9)(l); const R = (0, L.v9)(s); const H = (0, L.v9)(o); (0, N.useEffect)((() => { if (A && A.length) { C(A); const e = A.map(((e) => e.educational_modules_unit.name)); p(e); } }), [A]); const P = (0, N.useCallback)((() => { n(), y([]); }), [n]); const F = (0, N.useCallback)(((e, a) => { if (b.filter(((a) => a === e))[0]) { const t = b.filter(((a) => a !== e)); y(t); } else y(((a) => ve(ve([], a, !0), [e], !1))); }), [b]); const q = (0, N.useCallback)((() => {
                if (b.length) {
                    const e = []; b.forEach(((a) => { x.forEach(((t) => { a === t.educational_modules_unit.name && e.push(t.standard_curriculum_modules_unit_id); })); })); const a = H.filter(((e) => e.symbol_code === 'PROFESSIONAL_MODULE'))[0]; const t = ve([], R.cells, !0).map(((t) => ({
                        ...t, working_curriculum_symbol_id: a.working_curriculum_symbol_id, working_curriculum_symbol: a, additional_information: { standard_curriculum_modules_units_ids: e, start: R.cells[0].start_week, end: R.cells[R.cells.length - 1].start_week }, 
}))); t.forEach(((e) => { f(S.changeSelectedSymbolInData([e, r])); })), f(S.calculateTotalFieldsInSummaryData()); const n = {
                        trainingCourse: R.trainingCourse, cells: t, symbol: R.symbol, symbolsEqual: R.symbolsEqual,
                    }; const i = { ...n, symbol: [a.working_curriculum_symbol_id], symbolsEqual: !0 }; f(S.changeSelectedCells(i)), f(S.updateTrainingSchedule()), P();
                } else d(B.F.error('Выберите хотя бы один образовательный модуль'));
            }), [r, f, P, R, b, H, x]); return (0, N.useEffect)((() => { k && f(g(String(k))); }), [f, k]), (0, j.jsxs)(j.Fragment, {
                children: [(0, j.jsxs)(W.u, {
                    contentClassName: (0, E.A)('qH2lEurk', {}, [t]),
                    onClose: P,
                    isOpen: i,
                    children: [(0, j.jsx)(he.u, {
                        label: 'Выбрать образовательный модуль', options: _, optionValue: b, onClickOption: F, columnName: '', multiSelect: !0,
                    }), (0, j.jsxs)('div', {
                        className: 'k2yyD6iQ',
                        children: [(0, j.jsxs)(D.zx, {
                            theme: D.bn.BACKGROUND_DARK, size: D.qE.XS, className: be, onClick: P, children: [(0, j.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Отмена' }), (0, j.jsx)(O.J, { Svg: M.Z })],
                        }), (0, j.jsxs)(D.zx, {
                            theme: D.bn.BACKGROUND, size: D.qE.XS, className: be, onClick: q, children: [(0, j.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Выбрать' }), (0, j.jsx)(O.J, { Svg: I.Z })],
                        })], 
})],
                }), (0, j.jsx)(X.KF, { ref: m, push: u, placement: 'top-end' })],
            });
        })); let ge = function () { return ge = Object.assign || function (e) { for (var a, t = 1, n = arguments.length; t < n; t++) for (const i in a = arguments[t])Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]); return e; }, ge.apply(this, arguments); }; const pe = function (e, a, t) { if (t || arguments.length === 2) for (var n, i = 0, r = a.length; i < r; i++)!n && i in a || (n || (n = Array.prototype.slice.call(a, 0, i)), n[i] = a[i]); return e.concat(n || Array.prototype.slice.call(a)); }; const we = (0, N.memo)(((e) => {
            let a; let t; let i; let l; let h; let b; let v; const _ = e.className; const g = e.workingCurriculumId; const p = (0, N.useState)(); const w = p[0]; const x = p[1]; const C = (0, N.useRef)(null); const k = (0, z.T)(); const A = (0, N.useState)(0); const R = A[0]; const M = A[1]; const I = (0, N.useState)(!1); const H = I[0]; const P = I[1]; const F = (0, N.useState)(!1); const W = F[0]; const q = F[1]; const Y = (0, N.useState)(0); const G = Y[0]; const U = Y[1]; const Z = (0, N.useState)(0); const K = Z[0]; const Q = Z[1]; const $ = (0, L.v9)(r); const ee = (0, L.v9)(o); const ae = (0, L.v9)(m); const te = (0, L.v9)(d); const oe = (0, L.v9)(V.g9); const se = (0, L.v9)(V.vW); const ue = (0, L.v9)(V.lj); const de = (a = (0, L.v9)(c)) === null || void 0 === a ? void 0 : a.isLoading; const me = (t = (0, L.v9)(c)) === null || void 0 === t ? void 0 : t.errors; const he = (i = (0, L.v9)(c)) === null || void 0 === i ? void 0 : i.created; const be = (l = (0, L.v9)(u)) === null || void 0 === l ? void 0 : l.isLoading; const ye = (h = (0, L.v9)(u)) === null || void 0 === h ? void 0 : h.errors; const ve = (b = (0, L.v9)(u)) === null || void 0 === b ? void 0 : b.updated; const we = (0, L.v9)(re.rb); const xe = (0, L.v9)(re.yl); const Ce = (0, L.v9)(re.sE); const Se = (0, L.v9)(s); const ke = (0, L.v9)(f); const je = (0, N.useCallback)((() => { q(!1); }), []); const Ne = (0, N.useCallback)((() => { P(!0); }), []); const Ee = (0, N.useCallback)((() => { P(!1); }), []); const Ae = (0, N.useCallback)(((e) => {
                if (Se) {
                    if (e.symbol_code === 'PROFESSIONAL_MODULE')Ne(); else {
                        const a = pe([], Se.cells, !0).map(((a) => ({
 ...a, working_curriculum_symbol_id: e.working_curriculum_symbol_id, working_curriculum_symbol: e, additional_information: null 
}))); a.forEach(((e) => { k(S.changeSelectedSymbolInData([e, K])); })), k(S.calculateTotalFieldsInSummaryData()); const t = {
                            trainingCourse: Se.trainingCourse, cells: a, symbol: Se.symbol, symbolsEqual: Se.symbolsEqual,
                        }; const n = { ...t, symbol: [e.working_curriculum_symbol_id], symbolsEqual: !0 }; k(S.changeSelectedCells(n)), k(S.updateTrainingSchedule());
                    }
                }
            }), [K, k, Ne, Se]); const De = (0, N.useCallback)((() => { k(S.addNewCourse()); }), [k]); const Oe = (0, N.useCallback)(((e) => { U(e), q(!0); }), []); return (0, N.useEffect)((() => { g && (k((0, n.z)()), k((0, re.tb)()), k(y(g))); }), [k, g]), (0, N.useEffect)((() => { if (we) { const e = we.knrtu_kai.options.filter(((e) => e.name === 'credit_in_hours'))[0].value; Q(Number(e)); } }), [we]), (0, N.useEffect)((() => { me && x(B.F.error('Произошла ошибка при создании графика учебного процесса')); }), [me]), (0, N.useEffect)((() => { ye && x(B.F.error('Произошла ошибка при обновлении данных графика учебного процесса')); }), [ye]), (0, N.useEffect)((() => { he && x(B.F.success('Данные графика учебного процесса успешно обновлены')); }), [he]), (0, N.useEffect)((() => { ve && x(B.F.success('Данные графика учебного процесса успешно обновлены')); }), [ve]), v = ae || se || de || be || xe ? (0, j.jsx)(J.O, { height: 600, width: '100%' }) : te && (te == null ? void 0 : te.status) !== 404 || ue || Ce ? (0, j.jsx)(T.xv, {
                theme: T.lg.ERROR, size: T.yH.M, weight: T.fs.SEMIBOLD, className: le.error, align: T.PH.CENTER, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, j.jsxs)(j.Fragment, {
                children: [!ke && (0, j.jsx)('div', {
                    className: le.selectSymbols,
                    children: ee == null ? void 0 : ee.map(((e) => {
                        let a; let t; return (0, j.jsx)(D.zx, {
                            className: (0, E.A)(le.symbolBtn, (a = {}, a[le.activeSymbolBtn] = (Se == null ? void 0 : Se.symbolsEqual) && ((t = Se == null ? void 0 : Se.symbol) === null || void 0 === t ? void 0 : t[0]) === e.working_curriculum_symbol_id, a), []), theme: D.bn.CLEAR, buttonForm: D.N5.NOT_BORDERED, onClick() { Ae(e); }, title: e.name, children: e.symbol_code === 'THEORY' ? (0, j.jsx)('span', { className: le.theorySymbol }) : e.displayed_symbol,
                        }, e.symbol_code);
                    })),
                }), (0, j.jsxs)('div', {
                    className: le.table,
                    children: [(0, j.jsxs)('div', {
 className: le.tableRow,
children: [(0, j.jsx)('div', { className: (0, E.A)(le.tableAsideName, {}, [le.tableCell]), children: (0, j.jsx)(T.xv, { size: T.yH.M, weight: T.fs.SEMIBOLD, children: 'Курс' }) }), (0, j.jsx)('div', {
 className: le.tableMonths,
children: oe == null ? void 0 : oe.byMonths.map(((e) => {
 let a; return (0, j.jsxs)('div', {
 className: (0, E.A)(le.tableMonth, (a = {}, a[le.tableMonthEmpty] = e.doubleMonth, a), []),
children: [e.doubleMonth ? (0, j.jsx)('div', { className: (0, E.A)(le.tableMonthName, {}, [le.tableCell]) }) : (0, j.jsx)(T.xv, {
                        size: T.yH.XM, weight: T.fs.SEMIBOLD, className: (0, E.A)(le.tableMonthName, {}, [le.tableCell]), children: e.monthsNamesRu, 
}), e.doubleMonth ? (0, j.jsxs)('div', { className: (0, E.A)(le.tableMonthDate, {}, [le.tableCell]), children: [(0, j.jsx)(T.xv, { children: e.weeks[0].startDay }), (0, j.jsx)(T.xv, { children: e.weeks[0].endDay })] }) : (0, j.jsx)('div', { className: le.tableMonthDates, children: e.weeks.map(((e) => (0, j.jsxs)('div', { className: (0, E.A)(le.tableMonthDate, {}, [le.tableCell]), children: [(0, j.jsx)(T.xv, { children: e.startDay }), (0, j.jsx)(T.xv, { children: e.endDay })] }))) })] 
}); 
})) 
})] 
}), (0, j.jsxs)('div', { className: le.tableRow, children: [(0, j.jsx)('div', { className: (0, E.A)(le.tableAsideName, {}, [le.tableCell]), children: (0, j.jsx)(T.xv, { size: T.yH.M, weight: T.fs.SEMIBOLD, children: 'Недели' }) }), (0, j.jsx)('div', { className: le.tableWeeks, children: oe == null ? void 0 : oe.byWeeks.map(((e) => (0, j.jsx)(T.xv, { weight: T.fs.SEMIBOLD, className: (0, E.A)(le.tableWeek, {}, [le.tableCell]), children: e.index }, e.index))) })] }), $ && pe([], new Array($.data.length / 52), !0).map(((e, a) => {
                        let t; return (0, j.jsxs)('div', {
                            className: le.tableRow,
                            children: [(0, j.jsxs)(D.zx, {
                                className: (0, E.A)(le.tableAsideName, (t = {}, t[le.deleteActiveButton] = $ && a + 1 === $.data.length / 52 && !ke, t), [le.tableCell, le.tableCourseName]), theme: D.bn.CLEAR, onClick() { Oe(a + 1); }, buttonForm: D.N5.NOT_BORDERED, disabled: $ && a + 1 !== $.data.length / 52 || ke, children: [(0, j.jsx)(T.xv, { weight: T.fs.SEMIBOLD, children: a + 1 }), $ && a + 1 === $.data.length / 52 && !ke && (0, j.jsx)(O.J, { Svg: ne })],
                            }), (0, j.jsxs)('div', {
                                className: le.tableCourseInfoWrapper,
                                children: [a + 1 === 1 && (0, j.jsx)(ce, {
                                    className: (0, E.A)(le.tableCourseInfo, {}, [le.tableCell]), trainingScheduleData: $ == null ? void 0 : $.data.slice(0, 52), course: R, setCourse: M,
                                }), a + 1 === 2 && (0, j.jsx)(ce, {
                                    className: (0, E.A)(le.tableCourseInfo, {}, [le.tableCell]), trainingScheduleData: $ == null ? void 0 : $.data.slice(52, 104), course: R, setCourse: M,
                                }), a + 1 === 3 && (0, j.jsx)(ce, {
                                    className: (0, E.A)(le.tableCourseInfo, {}, [le.tableCell]), trainingScheduleData: $ == null ? void 0 : $.data.slice(104, 156), course: R, setCourse: M,
                                }), a + 1 === 4 && (0, j.jsx)(ce, {
                                    className: (0, E.A)(le.tableCourseInfo, {}, [le.tableCell]), trainingScheduleData: $ == null ? void 0 : $.data.slice(156, 208), course: R, setCourse: M,
                                })],
                            })],
                        }, a + 1);
                    })), $ && $.data.length / 52 != 4 && !ke && (0, j.jsx)(D.zx, {
                        className: (0, E.A)(le.tableAsideName, {}, [le.tableCell, le.tableAddNewRow]), theme: D.bn.CLEAR, buttonForm: D.N5.NOT_BORDERED, onClick: De, children: (0, j.jsx)(O.J, { className: le.tableAddNewRowIcon, Svg: ie.Z }),
                    })],
                }), (0, j.jsx)('div', { className: le.symbolsInfo, children: ee == null ? void 0 : ee.map(((e) => (0, j.jsxs)('div', { className: le.symbolInfo, children: [(0, j.jsx)('div', { className: le.symbolBox, children: (0, j.jsx)('span', { style: { backgroundColor: ''.concat(e.symbol_hex_color) }, children: e.displayed_symbol }) }), (0, j.jsx)(T.xv, { className: le.symbolText, children: e.name })] }, e.symbol_code))) })],
            }), (0, j.jsxs)(j.Fragment, {
                children: [(0, j.jsxs)('div', {
                    className: (0, E.A)(le.WorkingCurriculumTrainingScheduleTable, {}, [_]),
                    children: [(0, j.jsx)(T.xv, {
                        size: T.yH.M, theme: T.lg.PRIMARY, weight: T.fs.SEMIBOLD, align: T.PH.CENTER, className: le.title, children: 'График учебного процесса',
                    }), (0, j.jsx)('div', { className: le.content, children: v })],
                }), (0, j.jsx)(fe, { onClose: je, isOpen: W, deletingCourse: G }), (0, j.jsx)(_e, { onClose: Ee, isOpen: H, creditsPerHour: K }), (0, j.jsx)(X.KF, { ref: C, push: w, placement: 'top-end' })],
            });
        })); const xe = {
            WorkingCurriculumTrainingScheduleSummaryData: 'NOjp_HSg', title: 'g5822MDo', table: 'Re_ELavo', tableRow: 'kwLShLo5', tableCell: 'xwGHGr2q', tableAsideName: 'SWYzXJMA', tableCourseName: 'RLlCIyma', tableSymbolData: 'Ueqh9WWy', tableSymbolInfo: 'QdUCAgxR', tableSymbolName: 'S8j2UQfA', tableCourseInfoWrapper: 'kLMpzk3W',
        }; let Ce = function () { return Ce = Object.assign || function (e) { for (var a, t = 1, n = arguments.length; t < n; t++) for (const i in a = arguments[t])Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]); return e; }, Ce.apply(this, arguments); }; const Se = function (e, a, t) { if (t || arguments.length === 2) for (var n, i = 0, r = a.length; i < r; i++)!n && i in a || (n || (n = Array.prototype.slice.call(a, 0, i)), n[i] = a[i]); return e.concat(n || Array.prototype.slice.call(a)); }; const ke = (0, N.memo)(((e) => {
            let a; let t; const n = e.className; const i = (0, z.T)(); const l = (a = (0, L.v9)(r)) === null || void 0 === a ? void 0 : a.summary; const s = l && Object.keys(l.bySymbols); const c = (0, L.v9)(m); const u = (0, L.v9)(d); const f = (0, L.v9)(o); return (0, N.useEffect)((() => { u && u.status === 404 && f && !c && i(S.initEditDataSummary()); }), [i, u, c, f]), t = c || !l ? (0, j.jsx)(J.O, { className: xe.table, height: 300, width: '100%' }) : u && u.status !== 404 ? (0, j.jsx)(T.xv, {
                theme: T.lg.ERROR, size: T.yH.M, weight: T.fs.SEMIBOLD, className: (0, E.A)(xe.error, {}, [xe.table]), children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, j.jsxs)('div', { className: xe.table, children: [(0, j.jsxs)('div', { className: xe.tableRow, children: [(0, j.jsx)('div', { className: (0, E.A)(xe.tableAsideName, {}, [xe.tableCell]), children: (0, j.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Курс' }) }), s == null ? void 0 : s.map(((e) => (0, j.jsxs)('div', { className: xe.tableSymbolInfo, children: [(0, j.jsx)(T.xv, {
 className: (0, E.A)(xe.tableSymbolName, {}, [xe.tableCell]), size: T.yH.XXS, weight: T.fs.SEMIBOLD, align: T.PH.CENTER, children: l == null ? void 0 : l.bySymbols[e].symbolName 
}), (0, j.jsxs)('div', { className: xe.tableSymbolData, children: [(0, j.jsx)(T.xv, { className: (0, E.A)(xe.tableSymbolDataName, {}, [xe.tableCell]), size: T.yH.XXS, weight: T.fs.SEMIBOLD, align: T.PH.CENTER, children: 'нед.'}), (0, j.jsx)(T.xv, { className: (0, E.A)(xe.tableSymbolDataName, {}, [xe.tableCell]), size: T.yH.XXS, weight: T.fs.SEMIBOLD, align: T.PH.CENTER, children: 'час.'}), (0, j.jsx)(T.xv, { className: (0, E.A)(xe.tableSymbolDataName, {}, [xe.tableCell]), size: T.yH.XXS, weight: T.fs.SEMIBOLD, align: T.PH.CENTER, children: 'кред.'})] })] }, e)))] }), Se([], new Array(l == null ? void 0 : l.coursesCount), !0).map(((e, a) => (0, j.jsxs)('div', { className: xe.tableRow, children: [(0, j.jsx)('div', { className: (0, E.A)(xe.tableAsideName, {}, [xe.tableCell, xe.tableCourseName]), children: (0, j.jsx)(T.xv, { weight: T.fs.SEMIBOLD, size: T.yH.XXS, children: a + 1 }) }, a), s == null ? void 0 : s.map(((e) => { const t = l == null ? void 0 : l.bySymbols[e]; return (0, j.jsxs)('div', { className: xe.tableCourseInfoWrapper, children: [(0, j.jsx)('div', { className: (0, E.A)(xe.tableCourseInfo, {}, [xe.tableCell]), children: (0, j.jsx)(T.xv, { size: T.yH.XXS, children: t == null ? void 0 : t.courses[a + 1].weeks }) }), (0, j.jsx)('div', { className: (0, E.A)(xe.tableCourseInfo, {}, [xe.tableCell]), children: (0, j.jsx)(T.xv, { size: T.yH.XXS, children: t == null ? void 0 : t.courses[a + 1].hours }) }), (0, j.jsx)('div', { className: (0, E.A)(xe.tableCourseInfo, {}, [xe.tableCell]), children: (0, j.jsx)(T.xv, { size: T.yH.XXS, children: t == null ? void 0 : t.courses[a + 1].credits }) })] }, e); }))] }, a))), (0, j.jsxs)('div', { className: xe.tableRow, children: [(0, j.jsx)('div', { className: (0, E.A)(xe.tableAsideName, {}, [xe.tableCell, xe.tableCourseName]), children: (0, j.jsx)(T.xv, { weight: T.fs.SEMIBOLD, size: T.yH.XXS, children: 'Итого' }) }), s == null ? void 0 : s.map(((e) => { const a = l == null ? void 0 : l.bySymbols[e]; return (0, j.jsxs)('div', { className: xe.tableCourseInfoWrapper, children: [(0, j.jsx)('div', { className: (0, E.A)(xe.tableCourseInfo, {}, [xe.tableCell]), children: (0, j.jsx)(T.xv, { size: T.yH.XXS, weight: T.fs.SEMIBOLD, children: a == null ? void 0 : a.total.weeks }) }), (0, j.jsx)('div', { className: (0, E.A)(xe.tableCourseInfo, {}, [xe.tableCell]), children: (0, j.jsx)(T.xv, { size: T.yH.XXS, weight: T.fs.SEMIBOLD, children: a == null ? void 0 : a.total.hours }) }), (0, j.jsx)('div', { className: (0, E.A)(xe.tableCourseInfo, {}, [xe.tableCell]), children: (0, j.jsx)(T.xv, { size: T.yH.XXS, weight: T.fs.SEMIBOLD, children: a == null ? void 0 : a.total.credits }) })] }, e); }))] })] }), (0, j.jsxs)('div', {
                className: (0, E.A)(xe.WorkingCurriculumTrainingScheduleSummaryData, {}, [n]),
                children: [(0, j.jsx)(T.xv, {
                    size: T.yH.M, theme: T.lg.PRIMARY, weight: T.fs.SEMIBOLD, align: T.PH.CENTER, className: xe.title, children: 'Сводные данные',
                }), t],
            });
        })); let je = function () { return je = Object.assign || function (e) { for (var a, t = 1, n = arguments.length; t < n; t++) for (const i in a = arguments[t])Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]); return e; }, je.apply(this, arguments); }; var Ne = (0, N.memo)(((e) => {
            let a; let t; const n = e.className; const l = (0, N.useState)(); const o = l[0]; const s = l[1]; const b = (0, N.useRef)(null); const y = (0, z.T)(); const g = (0, A.TH)().pathname; const p = (0, A.s0)(); const w = (0, N.useState)(''); const x = w[0]; const C = w[1]; const k = (0, N.useState)(!1); const W = k[0]; const q = k[1]; const Y = (0, L.v9)(i); const Z = (0, L.v9)(r); const J = (0, L.v9)(m); const K = (0, L.v9)(d); const V = (a = (0, L.v9)(c)) === null || void 0 === a ? void 0 : a.isLoading; const Q = (t = (0, L.v9)(u)) === null || void 0 === t ? void 0 : t.isLoading; const $ = (0, L.v9)(f); const ee = (0, L.v9)(h); const te = (0, N.useCallback)((() => { if (JSON.stringify(Z) !== JSON.stringify(Y)) return y(S.changeRedirectToMainPage(!0)), void q(!0); p((0, H.MC)()); }), [y, p, Y, Z]); const ne = (0, N.useCallback)((() => { y(S.changeRedirectToMainPage(!1)), q(!1); }), [y]); const ie = (0, N.useCallback)((() => { y(S.cancelEditing()); }), [y]); const re = (0, N.useCallback)((() => { y(S.changeReadOnly(!0)); }), [y]); const le = (0, N.useCallback)((() => { y(S.changeReadOnly(!1)); }), [y]); const oe = (0, N.useCallback)((() => { Z && Z.data.length ? (K == null ? void 0 : K.status) === 404 ? (y(S.createNewTrainingSchedule()), y(_(x)).then(((e) => { e.meta.requestStatus === 'fulfilled' && ee && p((0, H.MC)()); })).catch(((e) => { console.log(e); }))) : y(v(x)).then(((e) => { e.meta.requestStatus === 'fulfilled' && ee && p((0, H.MC)()); })).catch(((e) => { console.log(e); })) : s(B.F.error('Пожалуйста, добавьте хотя бы один курс в график')); }), [y, ee, p, Z, K == null ? void 0 : K.status, x]); const se = J || V || Q; return (0, N.useEffect)((() => { C(g.split('/')[g.split('/').length - 1]); }), [g]), (0, j.jsxs)(j.Fragment, {
                children: [(0, j.jsxs)('div', {
                    className: (0, E.A)(U.WorkingCurriculumTrainingSchedule, {}, [n]),
                    children: [(0, j.jsxs)('div', { className: U.content, children: [(0, j.jsx)(ae, { workingCurriculumId: x }), (0, j.jsx)(we, { workingCurriculumId: x }), (0, j.jsx)(ke, {})] }), (0, j.jsxs)('div', {
                        className: U.buttons,
                        children: [(0, j.jsx)('div', {
                            className: U.buttonsLeftWrapper,
                            children: (0, j.jsxs)(D.zx, {
                                className: U.btn, theme: D.bn.BACKGROUND_GRAY, size: D.qE.XS, onClick: te, children: [(0, j.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Выйти' }), (0, j.jsx)(O.J, { className: U.exitBtnIcon, Svg: R.Z })],
                            }),
                        }), (0, j.jsxs)('div', {
                            className: U.buttonsRightWrapper,
                            children: [$ && (0, j.jsxs)(D.zx, {
                                className: U.btn, theme: D.bn.BACKGROUND, size: D.qE.XS, disabled: se, onClick: le, children: [(0, j.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Редактировать документ' }), (0, j.jsx)(O.J, { className: U.editIcon, Svg: F.Z })],
                            }), !$ && (0, j.jsxs)(j.Fragment, {
                                children: [(0, j.jsxs)(D.zx, {
                                    className: U.btn, theme: D.bn.BACKGROUND_GRAY, size: D.qE.XS, onClick: re, disabled: se, children: [(0, j.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Перейти в режим просмотра документа' }), (0, j.jsx)(O.J, { className: U.fileIcon, Svg: P.Z })],
                                }), (0, j.jsxs)(D.zx, {
                                    className: U.btn, theme: D.bn.BACKGROUND_GRAY, size: D.qE.XS, onClick: ie, disabled: se, children: [(0, j.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Отменить' }), (0, j.jsx)(O.J, { Svg: M.Z })],
                                }), (0, j.jsxs)(D.zx, {
                                    className: U.btn, theme: D.bn.BACKGROUND, size: D.qE.XS, onClick: oe, disabled: se, children: [(0, j.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Сохранить' }), (0, j.jsx)(O.J, { Svg: I.Z })],
                                })],
                            })],
                        })],
                    })],
                }), (0, j.jsx)(G, { onClose: ne, isOpen: W, onSubmitForm: oe }), (0, j.jsx)(X.KF, { ref: b, push: o, placement: 'top-end' })],
            });
        }));
    },
    2233: (e, a, t) => {
        t.d(a, { z: () => i }); const n = t(7168); var i = (0, n.hg)('workingCurriculum/fetchWorkingCurriculumSymbols', ((e, a) => {
            return t = void 0, n = void 0, r = function () {
                let e; let t; let n; return (function (e, a) {
                    let t; let n; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (s) { return (function (o) { if (t) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (t = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i; switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, n = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = a.call(e, l); } catch (e) { o = [6, e], n = 0; } finally { t = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, s])); }; }
                }(this, ((i) => { switch (i.label) { case 0: e = a.rejectWithValue, t = a.extra, i.label = 1; case 1: return i.trys.push([1, 3,, 4]), [4, t.api.get('/curriculum/working-curriculum/symbols/')]; case 2: return [2, i.sent().data]; case 3: return (n = i.sent()).message === 'Failed to fetch' ? [2, e({ status: 500, error: 'timeout' })] : [2, e({ status: n.response.status, error: n.response.data.message })]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, a) => { function l(e) { try { s(r.next(e)); } catch (e) { a(e); } } function o(e) { try { s(r.throw(e)); } catch (e) { a(e); } } function s(a) { let t; a.done ? e(a.value) : (t = a.value, t instanceof i ? t : new i(((e) => { e(t); }))).then(l, o); }s((r = r.apply(t, n || [])).next()); })); let t; let n; let i; let r;
        }));
    },
    9107: (e, a, t) => { t.d(a, { X: () => i }); const n = t(7294); var i = function () { const e = (0, n.useState)(window.innerWidth); const a = e[0]; const t = e[1]; return (0, n.useEffect)((() => { const e = function (e) { const a = e.target; t(a.innerWidth); }; return window.addEventListener('resize', e), function () { window.removeEventListener('resize', e); }; }), []), { width: a }; }; },
}]);
