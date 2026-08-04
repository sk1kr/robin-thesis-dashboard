# 2026-08-04 장마감 Thesis 리포트

목적: 오늘 Thesis에 영향을 준 변화가 있었는가?

> 오늘 결론: 오늘 Thesis에 실제 영향을 준 변화는 `PLTR Q2 실적과 가이던스 상향에 따른 AI software thesis 강화`이고, 나머지는 대부분 `미국 AI 반등`과 `한국 ETF 단기 추세선 미회복`이라는 가격/타이밍 변화다.
> 지금 할 일: `PLTR/AVGO/NVDA/GOOGL/VOO/SPYM/SPYG/SCHD`는 보유, `국내 AI전력 ETF`는 반등해도 20DMA 회복 전 추가 금지, `한국 반도체·메모리 ETF/RMBS/DRAM/GLW/NVTS/PL/DXYZ/CONY`는 Watch/Trim 우선이다.
> 건드리지 말 것: PLTR 실적 후 장외 급등 추격, 한국 AI전력 ETF의 이틀 반등 물타기, 한국 반도체 ETF 하락을 사업 Thesis 붕괴로 단정하는 판단은 하지 않는다.
> 가격 기준: Yahoo Finance chart API 기준 한국 보유 ETF·국내주·LY Corp는 2026-08-04 장마감 종가, 미국 보유주는 2026-08-03 정규장 종가로 20DMA/50DMA를 계산했다. PLTR 실적 후 장외 반응은 뉴스 기준으로만 반영했다.
> 뉴스 기준: 2026-08-03 15:30 KST 이후 2026-08-04 15:30 KST까지 PLTR Q2 2026 실적, 2026-08-03 미국장 반등, 한국 AI/반도체 수급 부담, RKLB-Iridium 거래 관련 추가 악재 부재를 확인했다.
> 미확인 항목: 2026-08-04 미국 정규장 반응, PLTR 실적 후 정규장 종가와 거래량, 한국 ETF별 기관·외국인 최종 순매수와 iNAV 괴리, `INFQ/FLY/BRUN/AMBO/KEEL` 정확 상장 데이터, Robin의 실제 매매 여부는 확인하지 못했다.

## 1. 09:00 대비 상태 변경 로그

| 종목 | 09:00 상태 | 현재 상태 | 변경 사유 |
|---|---|---|---|
| PLTR | 유지 but timing wait / 실적 확인 | 강화, 단기 추격은 금지 | Q2 매출 약 19.4억 달러, 전년 대비 +93%, EPS 0.41달러, 2026년 매출 가이던스 81.5억~81.58억 달러로 상향이 확인됐다. 이는 가격 반등이 아니라 고객 수요·수익성·가이던스가 동시에 좋아진 Thesis 강화다. 다만 2026-08-03 정규장 종가 125.65달러는 20DMA -2.4%, 50DMA -3.7%라 실적 후 정규장에서 20DMA 회복 확인이 필요하다. |
| NVDA / AVGO / TSM | 유지 but timing wait | NVDA/AVGO timing 개선, TSM은 미회복 | 미국장 반등으로 NVDA +2.9%, 206.64달러, 20DMA +1.4%; AVGO +0.8%, 392.23달러, 20DMA +1.7%다. TSM은 406.11달러, 20DMA -1.6%로 아직 미회복이다. AI 인프라 Thesis는 유지, stock selection은 AVGO/NVDA 우위로 회복됐다. |
| 국내 AI전력 ETF | 주의/Red, 보유만 | 주의 유지, 반등 지속 | 487240.KS +2.5%, 491820.KS +1.8%, 487230.KS +1.2%, 0117V0.KS +2.3%로 반등했지만 20DMA 대비 각각 -4.5%, -4.7%, -7.1%, -5.3%다. 전력 supercycle Thesis는 유지되지만 timing 회복은 아니다. |
| 국내 AI반도체·메모리 ETF | 주의/Red, 보유만 | 주의~약화 후보 유지 | 446770.KS -1.1%, 381180.KS -1.0%, 0181B0.KS -2.6%, 0167A0.KS -1.7%로 하락했고 20DMA -8.7%~-13.8%다. AI/HBM 사업 Thesis 훼손 확정은 아니지만 한국 반도체 쏠림 unwind와 단기 추세선 Red가 계속된다. |
| RKLB | 주의 유지, financing risk | 주의 유지, timing 일부 개선 | 70.43달러, +8.4%, 20DMA -1.2%까지 회복했다. Iridium 인수로 우주 인프라 Thesis 확장은 유지되지만 50DMA -26.2%, bridge financing·희석·승인 리스크는 남아 있다. |
| RGTI / IONQ | Watch/Trim | Watch 유지, 단기선 회복 | RGTI +7.2%, 20DMA +5.1%; IONQ +6.6%, 20DMA +3.9%다. 단기선은 회복했지만 50DMA는 각각 -16.3%, -22.9%라 quantum Thesis 강화가 아니라 반등 확인 수준이다. |
| RXT / SATL / GRAB | Watch/Trim | Watch 유지, timing 개선 | RXT +15.5%, 20DMA +5.6%; SATL +10.5%, 20DMA +0.5%; GRAB +4.9%, 20DMA +1.6%다. 고객·수주·현금흐름 새 근거가 아니라 낙폭 후 기술적 반등으로 본다. |
| RMBS / DRAM / GLW / NVTS / PL | Watch/Trim | Watch/Trim 유지 | RMBS 20DMA -8.0%, DRAM -8.0%, GLW -8.3%, NVTS -4.8%, PL -7.3%다. 일부 반등은 있었지만 핵심 추세선 회복 전이라 thesis OK, timing wait다. |
| VOO / SPYM / SPYG / QQQM / SCHD / SGOV / AGNC | 역할 유지 | 역할 유지 | 미국 지수·배당·현금성 sleeve는 대부분 20DMA 근처 또는 위다. QQQM은 20DMA +0.0%, SGOV/AGNC는 소폭 아래지만 포트폴리오 완충 역할 변화는 없다. |
| LY Corp / 증권 / 리츠 | 역할 유지 | 역할 유지 | LY Corp는 468엔, +4.8%, 20DMA +4.3%로 개선됐다. Mirae Asset은 33,150원, 20DMA -11.1%로 약세 지속이다. AI 핵심 Thesis와 분리해 비핵심 sleeve로 관리한다. |

## 2. Thesis 변화 vs 단순 가격 변화

| 종목 | Thesis 변화 | 가격/타이밍 변화 | 판단 |
|---|---|---|---|
| PLTR | 강화. 매출 성장, U.S. commercial/government 성장, FCF, 2026 가이던스 상향이 동시에 확인됐다. | 2026-08-03 정규장 종가는 20DMA 아래였지만 실적 후 장외 급등이 확인됐다. | Thesis 강화, timing은 2026-08-04 미국 정규장 종가로 확인. 추격보다 보유 우선. |
| NVDA / AVGO | 유지~강화 후보. AI compute·ASIC·networking money-flow가 다시 핵심주로 이동했다. | 둘 다 20DMA 위를 회복했다. | 사업 Thesis 유지와 timing 개선. 추가는 거래량 확인 후. |
| TSM / RMBS / DRAM | 유지. Foundry·memory interface·HBM 병목 Thesis를 깨는 새 근거는 없다. | TSM은 20DMA -1.6%, RMBS/DRAM은 -8%대다. | Thesis OK, timing wait. 가격 반등 전 신규자금 금지. |
| 국내 AI전력 ETF | 유지. 데이터센터 전력·grid bottleneck Thesis는 유지된다. | 이틀째 반등했지만 전부 20DMA 아래, 50DMA -15%~-21%다. | 반등은 매수 신호가 아니다. 20DMA 회복 전 보유만. |
| 국내 AI반도체·메모리 ETF | 유지~주의. AI/HBM 수요는 남지만 한국 반도체 레버리지 unwind와 중국 경쟁 우려가 수급을 누른다. | 오늘도 -1%~-2.6%, 20DMA -8.7%~-13.8%다. | Thesis 훼손 확정 아님. 타이밍 Red 관리가 먼저다. |
| RKLB | 유지~주의. Iridium 인수는 recurring space infrastructure 가능성을 넓힌다. | 8.4% 반등으로 20DMA 근처까지 왔지만 50DMA -26.2%다. | Thesis 확대와 financing/timing 리스크를 분리한다. |
| RGTI / IONQ / RXT / SATL | 변화 없음. 상용화·수주·가이던스 새 근거는 확인되지 않았다. | 하루 +6%~+15% 반등과 20DMA 회복 종목이 생겼다. | 단순 가격 반등. Watch 유지, 물타기 금지. |
| DXYZ / CONY / XOVR | 변화 없음. 상품 구조·NAV·분배·유동성 리스크가 핵심이다. | DXYZ -4.2%, CONY -8.4%, XOVR -1.6% vs 20DMA다. | 가격 회복이 와도 Thesis 강화로 보지 않는다. |

## 3. Sell / Trim / Watch 신호

| 그룹 | 종목 | 액션 | 이유 |
|---|---|---|---|
| Hold / 강화 | PLTR | 보유, 실적 후 정규장 확인 | Q2와 가이던스는 Thesis 강화다. 단, 장외 급등 추격은 risk/reward 확인 전 금지다. |
| Hold | AVGO, NVDA, GOOGL, VOO, SPYM, SPYG, SCHD | 보유 | AI leader와 지수/배당 sleeve가 20DMA 위 또는 근처다. 포트폴리오 중심축으로 유지 가능하다. |
| Watch | TSM, QQQM, SGOV, AGNC | 보유만 | 역할은 유지되지만 TSM은 20DMA 아래, QQQM은 20DMA 턱걸이, SGOV/AGNC는 방어 sleeve라 공격 판단 대상이 아니다. |
| Trim Watch | 국내 AI전력 ETF | 반등 시에도 추가 금지 | 전력 Thesis는 유지되지만 20DMA와 50DMA 아래다. 수급 회복 전 물타기 금지다. |
| Trim Watch | 국내 AI반도체·메모리 ETF, RMBS, DRAM, GLW | 보유만, 회복 확인 | 한국 반도체 ETF는 약세 지속, RMBS/DRAM/GLW도 20DMA 아래다. |
| Watch/Trim | RKLB, NVTS, PL | 20DMA 회복 전 신규자금 금지 | RKLB는 20DMA 근처까지 왔지만 financing risk가 남고, NVTS/PL은 아직 20DMA 아래다. |
| Watch only | RGTI, IONQ, RXT, SATL, GRAB | 반등 추격 금지 | 20DMA 회복 종목도 있으나 사업 근거가 새로 확인된 것은 아니다. |
| Sell/Trim 후보 | DXYZ, CONY, FLY | 반등 시 비중 점검 | 구조상품·비상장/우주 소형 노출은 NAV·분배·유동성·데이터 신뢰도가 핵심 리스크다. |
| 비핵심 유지 | LY Corp, Mirae Asset Securities, KODEX 증권, 리츠 ETF, TSLA residual, INFQ, BRUN, AMBO, KEEL, ABCL | active thesis로 키우지 않음 | AI core 판단과 분리하고, 확인 가능한 thesis evidence가 나오기 전 신규자금은 넣지 않는다. |

## 4. 오늘 확인된 사실 / 아직 미확인 가정

- 확인된 사실:
  - Money Flow: 미국장은 2026-08-03 S&P 500 +1.5%, Nasdaq +2.1%, Dow +1.3%로 반등했고, NVDA/AVGO/GOOGL/지수 ETF가 단기선을 회복했다. 반면 한국 AI반도체·메모리 ETF는 2026-08-04에도 하락해 money-flow가 한국 반도체로 아직 돌아오지 않았다.
  - Thesis: PLTR는 Q2 실적과 가이던스 상향으로 AI software thesis가 강화됐다. AI 인프라, 전력 supercycle, 메모리/HBM, 우주 인프라 thesis를 깨는 고객 손실·주문 취소·가이던스 하향은 확인하지 못했다.
  - Stock: 오늘 포트폴리오 안에서 가장 깨끗한 표현은 `PLTR`, `AVGO`, `NVDA`, `GOOGL`, `VOO/SPYM/SPYG`, `SCHD`다. `TSM/RMBS/DRAM/국내 AI ETF/RKLB`는 thesis는 남지만 timing 조건이 약하다.
  - Timing: PLTR는 실적 후 정규장 확인 대기, AVGO/NVDA/GOOGL은 20DMA 위, 국내 AI전력 ETF는 반등에도 20DMA 아래, 국내 AI반도체·메모리 ETF는 20DMA -8.7%~-13.8%로 Red가 유지된다.
- 미확인 가정:
  - PLTR 실적 후 장외 급등이 2026-08-04 미국 정규장에서 거래량 동반 20DMA 회복으로 확정될지 아직 모른다.
  - 한국 AI전력 ETF의 반등이 기관/외국인 순매수 전환인지, 단기 숏커버인지 확인되지 않았다.
  - 한국 반도체 ETF의 약세가 단기 레버리지 unwind인지, AI capex ROI 의심이 장기 valuation 압박으로 번지는지 추가 확인이 필요하다.
  - RKLB-Iridium 거래의 최종 희석률, debt refinancing 비용, 승인 일정은 아직 보유 판단의 미확인 리스크다.

## 5. 22:00로 넘길 항목

- 후보 심화: 신규 발굴은 22:00 역할이다. 오늘은 `AMD`, `SNDK`, `MU`, `ANET`, `APH`, `GEV`, `VRT`, `PWR`, `IRDM`, `DDOG`, `NET`을 External Signals로만 넘긴다.
- ETF/수급 확인: `487240.KS`, `491820.KS`, `487230.KS`, `0117V0.KS`, `446770.KS`, `381180.KS`, `0181B0.KS`, `0167A0.KS`의 2026-08-04 거래대금, 기관·외국인 순매수, iNAV 괴리, 구성종목 기여도를 확인한다.
- 제외 또는 보류: `DXYZ`, `CONY`, `FLY`, `PL`, `NVTS`, `RMBS`, `DRAM`, `GLW`는 20DMA 회복과 사업 근거가 동시에 나오기 전 신규자금 금지다.
- PLTR 심화: Q2의 RPO, customer count, contract duration, margin sustainability, 2026 guidance가 현재 valuation을 정당화하는지 22:00에서 숫자로 다시 검증한다.
- RKLB 심화: Iridium 인수의 cash/stock 구조, bridge loan, refinancing, 희석, regulatory approval, closing timeline을 재점검한다.

## 6. 내일 09:00 체크포인트

1. `PLTR`가 2026-08-04 미국 정규장에서 20DMA를 거래량 동반 회복하는지 확인한다. 회복하면 `강화 유지`, 실패하면 `Thesis 강화 but timing wait`로 분리한다.
2. `NVDA/AVGO/GOOGL`이 20DMA 위를 유지하고, `TSM`이 20DMA 회복으로 따라붙는지 본다.
3. 국내 AI전력 ETF의 반등이 20DMA 회복으로 이어지는지, 아니면 50DMA 아래 낙폭 후 반등에 그치는지 확인한다.
4. 국내 AI반도체·메모리 ETF가 하락을 멈추고 20DMA 이탈 폭을 줄이는지, 특히 `0181B0.KS`, `0167A0.KS`가 추가 이탈하는지 본다.
5. `RKLB/RMBS/DRAM/GLW/NVTS/PL/RGTI/IONQ/RXT/SATL`은 가격 반등률보다 고객·수주·가이던스·현금흐름 증거가 새로 나오는지 확인한다.

## 7. 상태별 요약

- 강화: `PLTR` business thesis.
- 유지/상대강도: `AVGO`, `NVDA`, `GOOGL`, `VOO`, `SPYM`, `SPYG`, `SCHD`, `LY Corp`.
- 유지 but timing wait: `TSM`, `RMBS`, `DRAM`, `RKLB`, 국내 AI전력 ETF, `QQQM`, `SGOV`, `AGNC`.
- 주의/약화: 국내 AI반도체·메모리 ETF, `GLW`, `NVTS`, `PL`, `Mirae Asset Securities`, `KODEX 증권`.
- 제외 검토: `DXYZ`, `CONY`, `FLY`, 데이터 미확인 소형 실험 포지션은 thesis 보강 전까지 Watch only다.

## 8. 확인한 근거 링크

- Yahoo Finance chart API: 미국/한국/일본 보유주 가격 및 20DMA/50DMA 계산: https://finance.yahoo.com/
- Palantir Investor Relations Q2 2026 results page: https://investors.palantir.com/financials/quarterly-results
- Palantir IR events page: https://investors.palantir.com/events
- AP 2026-08-03 미국 주요 지수 마감: https://apnews.com/article/wall-street-stocks-dow-nasdaq-f8e5f81b45c83878f5b7f69832bb0c95
- Investor's Business Daily 2026-08-03 시장/PLTR 실적 반응: https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-trump-stock-market-rally-palantir-earnings-spacex-on-deck/
- Investopedia chip recovery context: https://www.investopedia.com/could-chip-stocks-be-poised-to-stage-a-recovery-12032974
- Business Insider Korea AI/Kospi selloff context: https://www.businessinsider.com/kospi-stock-index-sk-hynix-situational-awareness-leopold-aschenbrenner-leverage-2026-8
- Rocket Lab / Iridium acquisition terms: https://investors.rocketlabcorp.com/news-releases/news-release-details/rocket-lab-acquire-iridium-historic-deal-creating-fully
