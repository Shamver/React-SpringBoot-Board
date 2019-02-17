package kr.co.board.vo;

public class FamilyVO {
    String name;
    String relShip;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRelShip() {
        return relShip;
    }

    public void setRelShip(String relShip) {
        this.relShip = relShip;
    }

    @Override
    public String toString() {
        return "FamilyVO{" +
                "name='" + name + '\'' +
                ", relShip='" + relShip + '\'' +
                '}';
    }
}
