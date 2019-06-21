import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public abstract class Animal {


	abstract String getName();
	abstract String getSound();

	void singVerse() {

		System.out.println("Old MacDonald had a farm, EIEIO!");
		System.out.println("And on that farm he had a " + getName() + " EIEIO!");
		System.out.println("With a " + getSound() + ", " + getSound() + ", here, and a "+
			getSound() + ", " + getSound() + " , there,");
		System.out.println("Here a " + getSound() + ", there a "+ getSound() + ", everywhere a " +
			getSound() + ", "+ getSound() + ",");
		System.out.println("Old MacDonald had a farm, EIEIO!");

	}


	public static void main(String[] args) {

		Animal cat = new Cat();
		cat.singVerse();
		Animal cow = new Cow();
		cow.singVerse();
		Animal dog = new Dog();
		dog.singVerse();
		Animal duck = new Duck();
		duck.singVerse();
		Animal horse = new Horse();
		horse.singVerse();

	}

/*	public static void main(String[] args) {

		ArrayList<String> anim = new ArrayList<String>();
		anim.add(new Cat());
		anim.add(new Cow());
		anim.add(new Dog());
		anim.add(new Duck());
		anim.add(new Horse());

		for (int i = 0; i < anim.size(); i++) {
		anim.get(i).singVerse();
	  } */
}
