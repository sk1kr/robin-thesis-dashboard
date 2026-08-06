# 2026-08-06 장마감 Thesis 리포트

목적: 오늘 Thesis에 영향을 준 변화가 있었는가?

> 오늘 결론: 오늘 보유 Thesis를 훼손할 새 사업 근거는 확인되지 않았다. 다만 한국장 급락으로 `국내 AI반도체·메모리 ETF`의 단기 추세선 경고가 다시 커졌고, `국내 AI전력 ETF`는 20DMA 위를 지켰지만 50DMA 아래라 회복 확정이 아니다.
> 지금 할 일: `NVDA/AVGO/PLTR/지수 ETF`는 보유하고, `RMBS/DRAM/GLW/국내 AI반도체·메모리 ETF`는 추가매수 없이 단기 추세선(20DMA) 회복을 확인하며, `0181B0/0167A0`은 Trim Watch로 올린다.
> 건드리지 말 것: KOSPI -4.23%와 ETF 하루 급락만으로 AI·HBM Thesis 붕괴를 선언하거나 물타기하지 말고, PLTR·SATL의 20DMA 상단 가격도 새 사업 근거 없이 추격하지 않는다.
> 가격 기준: Yahoo Finance chart API 기준 한국 보유 ETF·국내주·LY Corp는 2026-08-06 장마감 종가, 미국 보유주는 2026-08-05 정규장 종가로 20DMA/50DMA와 거래량을 계산했다.
> 뉴스 기준: 2026-08-05 15:30 KST 이후 2026-08-06 15:30 KST까지 미국 8월 5일 정규장 마감과 한국 8월 6일 장중·종가 변화를 확인했다.
> 미확인 항목: 2026-08-06 미국 프리마켓·정규장 반응, 한국 ETF별 기관·외국인 최종 순매수와 iNAV 괴리, 오늘 한국 급락의 종목별 수급 기여, `INFQ/FLY/BRUN/AMBO/KEEL` 정확 상장 데이터, Robin의 실제 매매 여부는 확인하지 못했다.

## 1. 09:00 대비 상태 변경 로그

오늘 09:00 슬롯이 생성되지 않아 `직전 15:30 및 22:00에서 다음 09:00로 넘긴 상태`를 비교 기준으로 사용했다.

| 종목 | 09:00 기준 상태 | 현재 상태 | 변경 사유 |
|---|---|---|---|
| 국내 AI반도체·메모리 ETF | 주의, 20DMA 회복 대기 | 주의 강화 / 0181B0·0167A0 Trim Watch | 446770 -3.7%(20DMA -6.0%), 381180 -3.6%(-3.9%), 0181B0 -8.7%(-11.1%), 0167A0 -7.6%(-10.5%)로 다시 이탈했다. 새 사업 훼손은 확인되지 않았지만 가격·타이밍 위험은 커졌다. |
| 국내 AI전력 ETF | 주의 완화, 일부 20DMA 회복 | 주의 유지 | 487240·491820·0117V0는 각각 -3.0% 안팎 하락했지만 20DMA 대비 +5.8%, +5.5%, +4.7%를 지켰다. 487230은 -5.2%로 미회복이고 전 종목이 50DMA 아래다. |
| RMBS / DRAM / GLW | thesis OK, timing wait | Watch 유지, 20DMA 재이탈 | RMBS -3.2%(20DMA -2.1%), DRAM -2.1%(-2.0%), GLW -2.0%(-0.3%)로 단기선을 다시 밑돌았다. AI interconnect·memory·optical Thesis의 새 훼손 근거는 없다. |
| NVDA / AVGO / TSM | 유지~강화 후보 | NVDA·AVGO 유지, TSM timing wait | NVDA +3.4%(20DMA +6.8%), AVGO 보합(+7.4%)은 리더 수요를 지켰다. TSM -0.8%는 20DMA +0.8%지만 50DMA -2.7%라 추가매수보다 확인이 우선이다. |
| PLTR | 강화, chase 금지 | 강화 유지, chase 금지 | -2.6% 조정에도 20DMA +20.5%, 거래량은 직전 20일 평균의 1.45배다. 실적·가이던스 강화는 유지되지만 과열 간격은 여전히 크다. |
| RKLB | 주의, timing 개선 | 주의 유지 | +0.5%, 20DMA +6.3%지만 50DMA -19.8%다. Iridium 인수의 자금조달·희석·승인 리스크가 해소됐다는 새 근거는 없다. |
| SATL | Watch | 가격 과열 Watch | +7.4%, 20DMA +22.8%, 거래량 2.69배다. 새 고객·수주 근거를 확인하지 못했으므로 Thesis 강화가 아닌 가격/거래량 신호다. |
| RGTI / IONQ / RXT / NVTS / PL | Watch | Watch 유지 | RGTI·IONQ·RXT·NVTS는 20DMA 위지만 50DMA 아래이고, PL은 20DMA -1.4%다. 하루 등락을 상용화·수주 Thesis 변화로 보지 않는다. |
| 지수·완충 ETF | 역할 유지 | 역할 유지 | VOO/SPYM/SPYG/QQQM/SCHD/SGOV는 20DMA 위다. 미국 지수는 S&P 500 -0.17%, Nasdaq -0.83%로 기록권에서 숨 고르기였다. |
| LY Corp / Mirae Asset | 역할 유지 | LY 유지 / Mirae 주의 | LY는 +1.4%, 20DMA +3.9%다. Mirae는 -2.7%, 20DMA -6.6%, 50DMA -22.8%로 비핵심 증권 sleeve의 timing 경고가 계속된다. |

## 2. Thesis 변화 vs 단순 가격 변화

| 종목 | Thesis 변화 | 가격/타이밍 변화 | 판단 |
|---|---|---|---|
| NVDA / AVGO | 유지~강화 후보. AI compute·ASIC Money Flow를 뒤집을 새 근거 없음. | NVDA는 상승, AVGO는 보합이며 둘 다 20DMA·50DMA 위. | 포트폴리오 내 가장 깨끗한 AI 인프라 표현. 보유, 추격은 Risk/Reward 확인 후. |
| PLTR | 직전 실적·가이던스 강화 유지. 오늘 새 변화 없음. | -2.6% 조정에도 20DMA +20.5%. | Thesis 강화 유지, timing은 과열권이라 신규 추격 금지. |
| 국내 AI전력 ETF | 전력망·데이터센터 전력 병목 Thesis 유지. | 일부 20DMA 위지만 하루 -3%, 전부 50DMA 아래. | thesis OK, timing wait. 20DMA 유지와 수급 확인 전 증액 금지. |
| 국내 AI반도체·메모리 ETF | HBM 수요·AI 메모리 Thesis를 깨는 새 사실 없음. | -3.6%~-8.7%, 20DMA -3.9%~-11.1%. | 사업 Thesis와 가격 경고를 분리. 0181B0·0167A0은 Trim Watch. |
| RMBS / DRAM / GLW | 고객·주문·가이던스 악화 미확인. | 20DMA를 소폭 재이탈, 50DMA -13%~-20%. | thesis OK, timing wait. 단기선 회복 전 추가 금지. |
| SATL | 새 수주·고객 증거 미확인. | 거래량 동반 +7.4%, 20DMA +22.8%. | 단순 가격 강세. Watch, not chase. |
| DXYZ / CONY / XOVR | 구조·NAV·분배 지속성의 개선 미확인. | 셋 모두 20DMA 아래 또는 근처. | 반등 여부와 무관하게 신규자금 금지. |

## 3. Sell / Trim / Watch 신호

| 그룹 | 종목 | 액션 | 이유 |
|---|---|---|---|
| Hold | NVDA, AVGO, PLTR, GOOGL, VOO, SPYM, SPYG, QQQM, SCHD, SGOV | 보유 | 핵심 Thesis 또는 자산배분 역할이 유지되고 대부분 20DMA 위다. PLTR는 신규 추격만 금지한다. |
| Hold / timing wait | TSM, 국내 AI전력 ETF | 보유만 | Thesis는 유지되지만 TSM은 50DMA 아래, 국내 AI전력은 50DMA 아래라 회복 확정 전이다. |
| Trim Watch | 0181B0, 0167A0 | 비중·손절 기준 재점검 | 하루 급락 자체가 매도 이유는 아니지만 20DMA 이탈이 -10%를 넘고 50DMA도 하락 구간이다. 사업 근거 악화가 추가되면 약화로 격상한다. |
| Watch / 추가 금지 | 446770, 381180, RMBS, DRAM, GLW, PL | 20DMA 회복 대기 | Thesis 훼손보다 timing 실패가 문제다. 하락만 보고 물타기하지 않는다. |
| Watch, not chase | RKLB, SATL, RGTI, IONQ, RXT, NVTS | 신규 추격 금지 | 일부는 20DMA 위지만 50DMA 아래이거나 새 사업 근거가 없다. |
| Sell/Trim 검토 | DXYZ, CONY, FLY | 반등 시 구조적 비중 축소 검토 | NAV·분배·유동성·상장 데이터 리스크가 핵심이며 가격 반등이 Thesis를 고치지 않는다. |
| 비핵심 Watch | LY, Mirae Asset, KODEX 증권, 리츠 ETF, AGNC, TSLA residual, ABCL, GRAB, INFQ, BRUN, AMBO, KEEL | active thesis로 확대 금지 | AI 핵심 노출과 분리하고 검증 가능한 사업 근거가 생길 때까지 규모를 키우지 않는다. |

## 4. 오늘 확인된 사실 / 아직 미확인 가정

- 확인된 사실:
  - Money Flow: 미국은 S&P 500 -0.17%, Nasdaq -0.83%로 기록권에서 혼조였지만 NVDA +3.43%, AVGO +0.03%로 AI 리더 수요는 유지됐다. 한국은 KOSPI -4.23%로 위험회피가 강했고, 보유 국내 반도체·메모리 ETF가 시장보다 더 크게 하락했다.
  - Thesis: 오늘 확인 범위에서 보유주의 고객 이탈, 주문 취소, 가이던스 하향, 생산 지연 같은 Thesis 훼손 근거는 새로 확인되지 않았다.
  - Stock: `NVDA/AVGO/PLTR`가 핵심 AI Thesis의 상대적으로 깨끗한 표현이고, 한국 메모리 ETF는 같은 Thesis라도 집중도와 변동성 때문에 현재 Stock/vehicle 품질이 낮다.
  - Timing: `0181B0/0167A0`은 20DMA 대비 -10% 이상, `RMBS/DRAM/GLW`는 20DMA 소폭 아래다. `PLTR/SATL`은 20DMA 대비 +20% 이상으로 반대 방향의 추격 위험이 있다.
- 미확인 가정:
  - 한국 급락이 외국인·기관의 구조적 AI/반도체 이탈인지, 지수 집중도와 단기 위험관리 매도인지 최종 수급 확인이 필요하다.
  - 0181B0·0167A0 급락이 기초자산 실적 전망 악화까지 반영한 것인지 확인되지 않았다.
  - 미국장에서 NVDA의 상대강도가 AVGO/TSM/RMBS/DRAM으로 확산될지, 단일 종목 선택 효과로 끝날지 모른다.
  - RKLB-Iridium 거래의 최종 희석률, 차입 비용, 승인 일정은 계속 미확인이다.

## 5. 22:00로 넘길 항목

- 후보 심화: 신규 발굴은 22:00 역할이다. `NVDA 상대강도`, `ANET`, `AMD`, `ALAB`, `DDOG`, `PWR`, `BKR`를 External Signals로만 넘긴다.
- ETF/수급 확인: `487240/491820/487230/0117V0/446770/381180/0181B0/0167A0`의 기관·외국인 순매수, 거래대금, iNAV 괴리와 기초지수 기여도를 확인한다.
- 제외 또는 보류: `DXYZ/CONY/FLY`는 구조 개선, `SATL/RGTI/IONQ/RXT/NVTS/PL`은 고객·수주·가이던스 근거가 나오기 전 신규자금을 넣지 않는다.
- 한국 메모리 심화: 0181B0·0167A0의 -7%~-9% 하락이 ETF 수급인지 기초종목 실적 재평가인지 구분한다.

## 6. 내일 09:00 체크포인트

1. `NVDA/AVGO/TSM/RMBS/DRAM/GLW`가 미국 8월 6일 정규장에서 20DMA를 지키거나 회복하는지 확인한다.
2. `PLTR`는 20DMA 위 유지 여부와 거래량 둔화를 보고, Thesis 강화와 과열 해소를 분리한다.
3. `0181B0/0167A0`이 추가 급락 없이 20DMA 이탈 폭을 줄이는지, 악화 뉴스가 동반되는지 확인한다.
4. 국내 AI전력 ETF 3종이 20DMA 위를 지키는지, 487230이 20DMA 회복을 시도하는지 본다.
5. `SATL/RKLB/NVTS/PL`은 가격보다 신규 고객·수주·현금흐름·자금조달 근거를 먼저 확인한다.

## 7. 상태별 요약

- 강화: `PLTR` 기존 실적 Thesis, `NVDA` timing과 상대강도.
- 유지: `AVGO`, `GOOGL`, `VOO`, `SPYM`, `SPYG`, `QQQM`, `SCHD`, `SGOV`, `LY Corp`.
- 유지 but timing wait: `TSM`, 국내 AI전력 ETF, `RMBS`, `DRAM`, `GLW`, `RKLB`.
- 주의/약화 후보: 국내 AI반도체·메모리 ETF, 특히 `0181B0/0167A0`; `PL`, `Mirae Asset`.
- 제외 검토: `DXYZ`, `CONY`, `FLY`; 데이터 미확인 소형 실험 포지션은 Watch only다.

## 8. 확인한 근거 링크

- Yahoo Finance chart API: 미국·한국·일본 보유주 종가, 거래량, 20DMA/50DMA 계산: https://finance.yahoo.com/
- AP 2026-08-05 미국 주요 지수 마감: https://apnews.com/article/cb27a1f9f4298b2a4dd595169bb17d16
- Palantir Investor Relations quarterly results: https://investors.palantir.com/financials/quarterly-results/default.aspx/
- Rocket Lab / Iridium acquisition announcement: https://investors.rocketlabcorp.com/news-releases/news-release-details/rocket-lab-acquire-iridium-historic-deal-creating-fully
